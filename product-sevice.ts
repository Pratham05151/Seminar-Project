
// src/lib/services/product-service.ts
'use server';

import { db } from '@/lib/firebase/config';
import { collection, getDocs, doc, getDoc, query, where, limit } from 'firebase/firestore';
import type { Product, Category } from '@/lib/types';
// Import mock data as a fallback or for initial population reference
import { mockCategories, mockProducts } from '@/lib/mockData';

const USE_FIRESTORE = process.env.NEXT_PUBLIC_USE_FIRESTORE === 'true';

/**
 * Fetches all categories.
 * @returns A promise that resolves to an array of all categories.
 */
export async function getAllCategories(): Promise<Category[]> {
  if (!USE_FIRESTORE) {
    console.info("Product Service: Using local mockData.ts for categories (as 'Excel sheet' / offline database).");
    return Promise.resolve(mockCategories);
  }
  try {
    console.info("Product Service: Attempting to fetch categories from Firestore...");
    const categoriesCol = collection(db, 'categories');
    const categorySnapshot = await getDocs(categoriesCol);
    const categoryList = categorySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        slug: doc.id,
        name: data.name || 'Unnamed Category',
        iconName: data.iconName || 'Footprints', // Default icon if not specified
      } as Category;
    });
    if (categoryList.length > 0) {
      console.info("Product Service: Successfully fetched categories from Firestore.");
      return categoryList;
    } else {
      console.warn("Product Service: Firestore 'categories' collection is empty. Falling back to local mockData.ts.");
      return mockCategories;
    }
  } catch (error) {
    console.error("Product Service: Error fetching categories from Firestore: ", error);
    console.warn("Product Service: Falling back to local mockData.ts for categories due to error.");
    return mockCategories;
  }
}

/**
 * Fetches all products.
 * @returns A promise that resolves to an array of all products.
 */
export async function getAllProducts(): Promise<Product[]> {
  if (!USE_FIRESTORE) {
    console.info("Product Service: Using local mockData.ts for all products (as 'Excel sheet' / offline database).");
    return Promise.resolve(mockProducts);
  }
  try {
    console.info("Product Service: Attempting to fetch all products from Firestore...");
    const productsCol = collection(db, 'products');
    const productSnapshot = await getDocs(productsCol);
    const productList = productSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name || '',
        normalizedName: data.normalizedName || data.name?.toLowerCase() || '',
        imageUrl: data.imageUrl || '/home/user/studio/src/lib/product-images',
        dataAiHint: data.dataAiHint || data.category || 'product',
        category: data.category || 'uncategorized',
        prices: data.prices || [],
      } as Product;
    });
    if (productList.length > 0) {
      console.info("Product Service: Successfully fetched all products from Firestore.");
      return productList;
    } else {
      console.warn("Product Service: Firestore 'products' collection is empty. Falling back to local mockData.ts.");
      return mockProducts;
    }
  } catch (error) {
    console.error("Product Service: Error fetching all products from Firestore: ", error);
    console.warn("Product Service: Falling back to local mockData.ts for all products due to error.");
    return mockProducts;
  }
}


/**
 * Filters products based on a text query and/or category slug.
 * @param params An object containing optional 'q' (query) and 'category' (category slug).
 * @returns A promise that resolves to an array of filtered products.
 */
export async function getFilteredProducts(params: { q?: string; category?: string }): Promise<Product[]> {
  const { q: queryText, category: categorySlug } = params;
  let productsToFilter: Product[];

  if (!USE_FIRESTORE) {
    console.info(`Product Service: Filtering local mockData.ts (as 'Excel sheet'). Query: '${queryText || "N/A"}', Category: '${categorySlug || "N/A"}'.`);
    productsToFilter = mockProducts;
  } else {
    try {
      console.info(`Product Service: Attempting to fetch products from Firestore. Query: '${queryText || "N/A"}', Category: '${categorySlug || 'all'}'`);
      let qFsQuery;
      if (categorySlug && categorySlug.toLowerCase() !== 'all') {
        qFsQuery = query(collection(db, 'products'), where('category', '==', categorySlug.toLowerCase()));
      } else {
        qFsQuery = query(collection(db, 'products'));
      }

      const querySnapshot = await getDocs(qFsQuery);
      productsToFilter = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name || '',
          normalizedName: data.normalizedName || data.name?.toLowerCase() || '',
          imageUrl: data.imageUrl || '/home/user/studio/src/lib/product-images',
          dataAiHint: data.dataAiHint || data.category || 'product',
          category: data.category || 'uncategorized',
          prices: data.prices || [],
        } as Product;
      });

      if (productsToFilter.length > 0) {
         console.info(`Product Service: Successfully fetched ${productsToFilter.length} products from Firestore for category: ${categorySlug || 'all'}.`);
      } else if (categorySlug && categorySlug.toLowerCase() !== 'all') {
        console.warn(`Product Service: Firestore 'products' collection returned no results for category '${categorySlug}'. Falling back to local mockData.ts for this category.`);
        productsToFilter = mockProducts.filter(p => p.category === categorySlug.toLowerCase());
         if (productsToFilter.length > 0) {
          console.info(`Product Service: Found ${productsToFilter.length} products in local mockData.ts for category '${categorySlug}'.`);
        } else {
          console.warn(`Product Service: No products found in local mockData.ts for category '${categorySlug}'.`);
        }
      } else {
        console.warn("Product Service: Firestore 'products' collection is empty or returned no results for the general query. Falling back to all local mockData.ts.");
        productsToFilter = mockProducts;
      }
    } catch (error) {
      console.error("Product Service: Error fetching filtered products from Firestore: ", error);
      console.warn("Product Service: Falling back to local mockData.ts for filtering due to error.");
      productsToFilter = mockProducts;
    }
  }

  // Perform text filtering on the fetched/mocked product list
  if (queryText) {
    const lowerCaseQuery = queryText.toLowerCase().trim();
    if (lowerCaseQuery) {
      console.info(`Product Service: Performing text search for "${lowerCaseQuery}" on ${productsToFilter.length} products.`);
      const filteredResults = productsToFilter.filter(product => {
        const lowerCaseNormalizedName = (product.normalizedName || product.name || '').toLowerCase();
        const lowerCaseName = (product.name || '').toLowerCase();
        const productCategoryName = (product.category || '').toLowerCase();

        return (
          lowerCaseNormalizedName.includes(lowerCaseQuery) ||
          lowerCaseName.includes(lowerCaseQuery) ||
          ((!categorySlug || categorySlug.toLowerCase() === 'all') && productCategoryName.includes(lowerCaseQuery))
        );
      });
      console.info(`Product Service: Text search yielded ${filteredResults.length} products.`);
      return filteredResults;
    }
  }

  if (categorySlug && categorySlug.toLowerCase() !== 'all' && !queryText) {
    console.info(`Product Service: Filtering for category "${categorySlug}" from initial list of ${productsToFilter.length} products.`);
    const categoryFilteredResults = productsToFilter.filter(product => product.category === categorySlug.toLowerCase());
    console.info(`Product Service: Category filter yielded ${categoryFilteredResults.length} products.`);
    return categoryFilteredResults;
  }

  if (!queryText && (!categorySlug || categorySlug.toLowerCase() === 'all')) {
     console.info(`Product Service: Returning all ${productsToFilter.length} products (no specific query or category 'all').`);
     return productsToFilter;
  }

  console.info(`Product Service: Returning ${productsToFilter.length} products based on combined criteria.`);
  return productsToFilter;
}


/**
 * Fetches a slice of products, e.g., for trending products.
 * @param count The maximum number of products to return.
 * @returns A promise that resolves to an array of products.
 */
export async function getTrendingProducts(count: number = 4): Promise<Product[]> {
   if (!USE_FIRESTORE) {
    console.info(`Product Service: Using local mockData.ts for trending products (as 'Excel sheet'), count: ${count}.`);
    return Promise.resolve(mockProducts.slice(0, count));
  }
   try {
    console.info(`Product Service: Attempting to fetch ${count} trending products from Firestore...`);
    const q = query(collection(db, 'products'), limit(count));
    const querySnapshot = await getDocs(q);
    const productList = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name || '',
        normalizedName: data.normalizedName || data.name?.toLowerCase() || '',
        imageUrl: data.imageUrl || '/home/user/studio/src/lib/product-images',
        dataAiHint: data.dataAiHint || data.category || 'product',
        category: data.category || 'uncategorized',
        prices: data.prices || [],
      } as Product;
    });
    if (productList.length > 0) {
      console.info(`Product Service: Successfully fetched ${productList.length} trending products from Firestore.`);
      return productList;
    } else {
      console.warn(`Product Service: Firestore returned no trending products. Falling back to local mockData.ts (slice: ${count}).`);
      return mockProducts.slice(0, count);
    }
  } catch (error) {
    console.error("Product Service: Error fetching trending products from Firestore: ", error);
    console.warn(`Product Service: Falling back to local mockData.ts for trending products (slice: ${count}) due to error.`);
    return mockProducts.slice(0, count);
  }
}
