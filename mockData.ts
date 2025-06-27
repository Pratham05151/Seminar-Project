
// src/lib/mockData.ts
import type { Product, PlatformName, Category } from './types';

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-');

export const mockCategories: Category[] = [
  { name: 'Fruits', iconName: 'Apple', slug: 'fruit' },
  { name: 'Dairy', iconName: 'Milk', slug: 'dairy' },
  { name: 'Bakery', iconName: 'VenetianMask', slug: 'bakery' },
  { name: 'Electronics', iconName: 'Smartphone', slug: 'electronics' },
  { name: 'Fashion', iconName: 'Shirt', slug: 'fashion' },
  { name: 'Appliances', iconName: 'Blend', slug: 'appliances' },
  { name: 'Books', iconName: 'BookOpen', slug: 'books' },
  { name: 'Furniture', iconName: 'Sofa', slug: 'furniture' },
  { name: 'Health', iconName: 'Stethoscope', slug: 'health' },
  { name: 'Sports', iconName: 'Dumbbell', slug: 'sports' },
  { name: 'Personal Care', iconName: 'Hand', slug: 'personal-care' },
  { name: 'Baby Care', iconName: 'Baby', slug: 'baby-care' },
  { name: 'Pantry', iconName: 'CookingPot', slug: 'pantry' },
  { name: 'Beverages', iconName: 'Coffee', slug: 'beverages' },
  { name: 'Snacks', iconName: 'Zap', slug: 'snacks' },
  { name: 'Household', iconName: 'SprayCan', slug: 'household' },
  { name: 'Home & Kitchen', iconName: 'Home', slug: 'home-kitchen' },
  { name: 'Office Supplies', iconName: 'Printer', slug: 'office-supplies' },
  { name: 'Pet Supplies', iconName: 'PawPrint', slug: 'pet-supplies' },
  { name: 'Toys & Games', iconName: 'ToyBrick', slug: 'toys-games' },
  { name: 'Automotive Accessories', iconName: 'Car', slug: 'automotive-accessories' },
  { name: 'Gardening', iconName: 'Spade', slug: 'gardening'},
  { name: 'Stationery', iconName: 'PenTool', slug: 'stationery' },
  { name: 'Cleaning Supplies', iconName: 'Trash2', slug: 'cleaning-supplies' },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Fresh Apples (Pack of 4)',
    normalizedName: 'apple fruit',
    imageUrl: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/364b5758-27e5-48e5-9004-f18331a16922/Apple-Royal-Gala-4-pc-Combo.jpeg',
    dataAiHint: 'apples fruit',
    category: 'fruit',
    prices: [
      { platformName: 'Zepto', price: 120, url: 'https://www.zepto.com/product/fresh-apples-kashmiri-select-4pcs-id-real123', deliveryTime: '10-15 min', stockStatus: 'In Stock' },
      { platformName: 'BigBasket', price: 125, url: `https://www.bigbasket.com/pd/${slugify('Fresh Apples (Pack of 4)')}`, deliveryTime: '30-45 min', stockStatus: 'In Stock' },
      { platformName: 'Blinkit', price: 118, url: `https://blinkit.com/prn/${slugify('Fresh Apples (Pack of 4)')}`, deliveryTime: '15-20 min', stockStatus: 'Low Stock' },
      { platformName: 'SwiggyInstamart', price: 122, url: `https://www.swiggy.com/instamart/item/${slugify('Fresh Apples (Pack of 4)')}`, deliveryTime: '20-25 min', stockStatus: 'In Stock' },
      { platformName: 'FlipkartMinutes', price: 124, url: `https://www.flipkart.com/grocery/product/${slugify('Fresh Apples (Pack of 4)')}`, deliveryTime: '25-30 min', stockStatus: 'In Stock' },
    ],
  },
  {
    id: '2',
    name: 'Organic Bananas (Bunch)',
    normalizedName: 'banana fruit',
    imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-3000-3000,pr-true,f-auto,q-80/cms/product_variant/c1090b9c-d3f9-43d9-a46e-70ff482990b2/Banana-Elaichi-Yelakki.jpeg`,
    dataAiHint: 'bananas fruit',
    category: 'fruit',
    prices: [
      { platformName: 'Zepto', price: 50, url: `https://www.zepto.com/product/${slugify('Organic Bananas (Bunch)')}`, deliveryTime: '10-15 min', stockStatus: 'In Stock' },
      { platformName: 'BigBasket', price: 55, url: `https://www.bigbasket.com/pd/${slugify('Organic Bananas (Bunch)')}`, deliveryTime: '25-35 min', stockStatus: 'Out of Stock' },
      { platformName: 'JioMart', price: 48, url: `https://www.jiomart.com/p/${slugify('Organic Bananas (Bunch)')}`, deliveryTime: '45-60 min', stockStatus: 'In Stock' },
    ],
  },
  {
    id: '3',
    name: 'Amul Taaza Toned Milk (1L)',
    normalizedName: 'milk dairy',
    imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1200,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/d4b8ef20-df5e-4d0b-ab04-36de62dd0f45/Amul-Taaza-Toned-Fresh-Milk-Pouch-500-ml-Combo.jpeg`,
    dataAiHint: 'milk carton',
    category: 'dairy',
    prices: [
      { platformName: 'Zepto', price: 60, url: `https://www.zepto.com/product/${slugify('Amul Taaza Toned Milk (1L)')}`, deliveryTime: '10-12 min', stockStatus: 'In Stock' },
      { platformName: 'BigBasket', price: 62, url: `https://www.bigbasket.com/pd/${slugify('Amul Taaza Toned Milk (1L)')}`, deliveryTime: '30-40 min', stockStatus: 'In Stock' },
      { platformName: 'Blinkit', price: 59, url: `https://blinkit.com/prn/${slugify('Amul Taaza Toned Milk (1L)')}`, deliveryTime: '15-20 min', stockStatus: 'In Stock' },
      { platformName: 'SwiggyInstamart', price: 61, url: `https://www.swiggy.com/instamart/item/${slugify('Amul Taaza Toned Milk (1L)')}`, deliveryTime: '20-25 min', stockStatus: 'Low Stock' },
      { platformName: 'JioMart', price: 58, url: `https://www.jiomart.com/p/${slugify('Amul Taaza Toned Milk (1L)')}`, deliveryTime: '40-55 min', stockStatus: 'In Stock' },
      { platformName: 'FlipkartMinutes', price: 60, url: `https://www.flipkart.com/grocery/product/${slugify('Amul Taaza Toned Milk (1L)')}`, deliveryTime: '25-30 min', stockStatus: 'Out of Stock' },
    ],
  },
  {
    id: '4',
    name: 'Whole Wheat Bread',
    normalizedName: 'bread bakery',
    imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/abc026ba-7a79-406a-8143-d87feb21d3e7/The-Health-Factory-Zero-Maida-Bread-100-Whole-Wheat-350-g-Combo.jpg`,
    dataAiHint: 'bread loaf',
    category: 'bakery',
    prices: [
      { platformName: 'BigBasket', price: 45, url: `https://www.bigbasket.com/pd/${slugify('Whole Wheat Bread')}`, deliveryTime: '25-35 min', stockStatus: 'In Stock' },
      { platformName: 'Blinkit', price: 42, url: `https://blinkit.com/prn/${slugify('Whole Wheat Bread')}`, deliveryTime: '10-15 min', stockStatus: 'In Stock' },
      { platformName: 'SwiggyInstamart', price: 44, url: `https://www.swiggy.com/instamart/item/${slugify('Whole Wheat Bread')}`, deliveryTime: '20-30 min', stockStatus: 'Out of Stock' },
    ],
  },
  {
    id: '5',
    name: 'Colgate MaxFresh Toothpaste (150g)',
    normalizedName: 'colgate toothpaste personal care',
    imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/364ae66d-05e4-488e-bcc7-d30464ffc3ce/Colgate-MaxFresh-Toothpaste-Red-Gel-Paste-with-Menthol-for-Super-Fresh-Breath-Spicy-Fresh-150-g-Combo.jpg`,
    dataAiHint: 'toothpaste tube',
    category: 'personal-care',
    prices: [
      { platformName: 'Zepto', price: 90, url: `https://www.zepto.com/product/${slugify('Colgate MaxFresh Toothpaste (150g)')}`, deliveryTime: '12-18 min', stockStatus: 'In Stock' },
      { platformName: 'BigBasket', price: 95, url: `https://www.bigbasket.com/pd/${slugify('Colgate MaxFresh Toothpaste (150g)')}`, deliveryTime: '30-45 min', stockStatus: 'In Stock' },
      { platformName: 'Blinkit', price: 88, url: `https://blinkit.com/prn/${slugify('Colgate MaxFresh Toothpaste (150g)')}`, deliveryTime: '15-25 min', stockStatus: 'Low Stock' },
    ],
  },
  {
    id: '6',
    name: 'iPhone 15 Pro (Exclusive Deal Offer)',
    normalizedName: 'apple electronics exclusive deal offer',
    imageUrl: `https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1744355653/Croma%20Assets/Communication/Mobiles/Images/309731_0_yooz4b.png?tr=w-640`,
    dataAiHint: 'smartphone electronics',
    category: 'electronics',
    prices: [
      { platformName: 'JioMart', price: 115000, url: `https://www.jiomart.com/p/${slugify('iPhone 15 Pro')}`, deliveryTime: '1-2 days', stockStatus: 'In Stock' },
      { platformName: 'FlipkartMinutes', price: 110999, url: `https://www.flipkart.com/product/${slugify('iPhone 15 Pro (Exclusive Deal Offer)')}`, deliveryTime: 'Next day', stockStatus: 'In Stock' },
    ],
  },
  {
    id: '7',
    name: 'Lays Classic Salted Chips (50g) - Multi-Pack Deal',
    normalizedName: 'chips snacks multi-pack deal',
    imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1200,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/b3c6d501-b257-4994-8ec8-02a855744e84/Lay-s-Classic-Salted-Potato-Chips.jpg`,
    dataAiHint: 'potato chips',
    category: 'snacks',
    prices: [
      { platformName: 'Zepto', price: 18, url: `https://www.zepto.com/product/${slugify('Lays Classic Salted Chips (50g)')}`, deliveryTime: '8-12 min', stockStatus: 'In Stock' },
      { platformName: 'BigBasket', price: 20, url: `https://www.bigbasket.com/pd/${slugify('Lays Classic Salted Chips (50g)')}`, deliveryTime: '20-30 min', stockStatus: 'In Stock' },
      { platformName: 'Blinkit', price: 19, url: `https://blinkit.com/prn/${slugify('Lays Classic Salted Chips (50g)')}`, deliveryTime: '10-15 min', stockStatus: 'In Stock' },
    ],
  },
  {
    id: '8',
    name: 'Tropicana Orange Juice (1L)',
    normalizedName: 'orange juice beverage',
    imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1200,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/bbff83b6-35e7-45da-a672-a51ddc3bce46/B-Natual-Orange-Juice-Tetrapack-1-l-Combo.jpeg`,
    dataAiHint: 'orange juice',
    category: 'beverages',
    prices: [
      { platformName: 'Zepto', price: 110, url: `https://www.zepto.com/product/${slugify('Tropicana Orange Juice (1L)')}`, deliveryTime: '15-20 min', stockStatus: 'In Stock' },
      { platformName: 'BigBasket', price: 115, url: `https://www.bigbasket.com/pd/${slugify('Tropicana Orange Juice (1L)')}`, deliveryTime: '30-40 min', stockStatus: 'In Stock' },
    ],
  },
  {
    id: '9',
    name: 'Nescafe Gold Instant Coffee (100g)',
    normalizedName: 'coffee beverage',
    imageUrl: `https://m.media-amazon.com/images/I/71WX6us47aL._SX679_.jpg`,
    dataAiHint: 'coffee jar',
    category: 'beverages',
    prices: [
      { platformName: 'BigBasket', price: 250, url: `https://www.bigbasket.com/pd/${slugify('Nescafe Gold Instant Coffee (100g)')}`, deliveryTime: '25-35 min', stockStatus: 'In Stock' },
      { platformName: 'JioMart', price: 240, url: `https://www.jiomart.com/p/${slugify('Nescafe Gold Instant Coffee (100g)')}`, deliveryTime: '40-50 min', stockStatus: 'Low Stock' },
    ],
  },
  {
    id: '10',
    name: 'Fortune Sunflower Oil (1L Pouch)',
    normalizedName: 'sunflower oil cooking',
    imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/cc042a12-6fd2-4075-bfe8-3ee6bf37497e/Fortune-Sunlite-Refined-Sunflower-Oil-Pouch.jpeg`,
    dataAiHint: 'oil pouch',
    category: 'pantry',
    prices: [
      { platformName: 'Zepto', price: 140, url: `https://www.zepto.com/product/${slugify('Fortune Sunflower Oil (1L Pouch)')}`, deliveryTime: '18-25 min', stockStatus: 'In Stock' },
      { platformName: 'BigBasket', price: 145, url: `https://www.bigbasket.com/pd/${slugify('Fortune Sunflower Oil (1L Pouch)')}`, deliveryTime: '35-45 min', stockStatus: 'In Stock' },
    ],
  },
  {
    id: '11',
    name: 'Aashirvaad Select Atta (5kg)',
    normalizedName: 'atta flour pantry',
    imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1200,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/df06cdfc-0962-45f9-97be-6caffdc863eb/Aashirvaad-Multigrain-Atta-3-Rotis-Fulfils-35-Daily-Fibre.jpg`,
    dataAiHint: 'flour bag',
    category: 'pantry',
    prices: [
      { platformName: 'BigBasket', price: 280, url: `https://www.bigbasket.com/pd/${slugify('Aashirvaad Select Atta (5kg)')}`, deliveryTime: '30-40 min', stockStatus: 'In Stock' },
      { platformName: 'Blinkit', price: 275, url: `https://blinkit.com/prn/${slugify('Aashirvaad Select Atta (5kg)')}`, deliveryTime: '15-20 min', stockStatus: 'Out of Stock' },
    ],
  },
  {
    id: '12', name: 'India Gate Basmati Rice Classic (1kg)', normalizedName: 'rice pantry', imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/2bd3b22f-acee-4942-961b-25ea5f571da2/India-Gate-Gold-Standard-Classic-Basmati-Rice-2-Years-Aged-Extra-Long-Grains-1-kg-Combo.jpg`, dataAiHint: 'rice bag', category: 'pantry', prices: [
      { platformName: 'Zepto', price: 150, url: `https://www.zepto.com/product/${slugify('India Gate Basmati Rice Classic (1kg)')}`, deliveryTime: '10-15 min', stockStatus: 'In Stock' },
      { platformName: 'SwiggyInstamart', price: 148, url: `https://www.swiggy.com/instamart/item/${slugify('India Gate Basmati Rice Classic (1kg)')}`, deliveryTime: '20-30 min', stockStatus: 'Low Stock' },
    ]
  },
  {
    id: '13', name: 'Oreo Chocolate Creme Biscuits (120g)', normalizedName: 'oreo snacks', imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1100,ar-1100-1100,pr-true,f-auto,q-80/cms/product_variant/098e5a73-c0f2-4fe7-8869-e36169929362/Cadbury-Oreo-Chocolate-Flavour-Cream-Sandwich-Biscuit-125-25-g-Combo.jpeg`, dataAiHint: 'oreo cookies', category: 'snacks', prices: [
      { platformName: 'Blinkit', price: 28, url: `https://blinkit.com/prn/${slugify('Oreo Chocolate Creme Biscuits (120g)')}`, deliveryTime: '10-15 min', stockStatus: 'In Stock' },
      { platformName: 'JioMart', price: 29, url: `https://www.jiomart.com/p/${slugify('Oreo Chocolate Creme Biscuits (120g)')}`, deliveryTime: '30-40 min', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '14', name: 'Maggi 2-Minute Noodles Masala (70g x 4 pack)', normalizedName: 'maggi noodles snacks', imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1200,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/cfe8f9f1-4fce-4ae0-bdbc-aa60d28ecec2/Maggi-2-Minute-Noodles-Masala-140-g-Combo.jpeg`, dataAiHint: 'instant noodles', category: 'snacks', prices: [
      { platformName: 'BigBasket', price: 55, url: `https://www.bigbasket.com/pd/${slugify('Maggi 2-Minute Noodles Masala (70g x 4 pack)')}`, deliveryTime: '20-30 min', stockStatus: 'In Stock' },
      { platformName: 'SwiggyInstamart', price: 56, url: `https://www.swiggy.com/instamart/item/${slugify('Maggi 2-Minute Noodles Masala (70g x 4 pack)')}`, deliveryTime: '15-25 min', stockStatus: 'Out of Stock' },
    ]
  },
  {
    id: '15', name: 'Lizol Disinfectant Surface Cleaner Citrus (975ml)', normalizedName: 'lizol household', imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1200,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/1b48276c-a8b0-426f-a2a2-2663390e420c/Lizol-Citrus-Floor-Cleaner-Liquid.jpeg`, dataAiHint: 'cleaning liquid', category: 'household', prices: [
      { platformName: 'Zepto', price: 180, url: `https://www.zepto.com/product/${slugify('Lizol Disinfectant Surface Cleaner Citrus (975ml)')}`, deliveryTime: '15-20 min', stockStatus: 'In Stock' },
      { platformName: 'Blinkit', price: 175, url: `https://blinkit.com/prn/${slugify('Lizol Disinfectant Surface Cleaner Citrus (975ml)')}`, deliveryTime: '10-18 min', stockStatus: 'Low Stock' },
    ]
  },
  {
    id: '16', name: 'Surf Excel Matic Top Load Detergent Powder (2kg)', normalizedName: 'detergent household', imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/82c160ac-0b28-496d-afea-f544e914e68c/Surf-Excel-Matic-Front-Load-Detergent-Liquid.jpeg`, dataAiHint: 'detergent powder', category: 'household', prices: [
      { platformName: 'BigBasket', price: 450, url: `https://www.bigbasket.com/pd/${slugify('Surf Excel Matic Top Load Detergent Powder (2kg)')}`, deliveryTime: 'Next day', stockStatus: 'In Stock' },
      { platformName: 'JioMart', price: 440, url: `https://www.jiomart.com/p/${slugify('Surf Excel Matic Top Load Detergent Powder (2kg)')}`, deliveryTime: '1-2 days', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '17', name: 'Pampers Active Baby Diapers (Medium, 72 count)', normalizedName: 'diapers baby', imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1200,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/a8e036b8-08fe-4a47-bc66-9f69ba34dcb1/Pampers-All-Round-Protection-Diapers-For-Kids-White-L-9-14-kg-.jpeg`, dataAiHint: 'baby diapers', category: 'baby-care', prices: [
      { platformName: 'Zepto', price: 800, url: `https://www.zepto.com/product/${slugify('Pampers Active Baby Diapers (Medium, 72 count)')}`, deliveryTime: '20-30 min', stockStatus: 'In Stock' },
      { platformName: 'FlipkartMinutes', price: 795, url: `https://www.flipkart.com/grocery/product/${slugify('Pampers Active Baby Diapers (Medium, 72 count)')}`, deliveryTime: 'Same day', stockStatus: 'Low Stock' },
    ]
  },
  {
    id: '18', name: 'Himalaya Gentle Baby Soap (75g x 4)', normalizedName: 'baby soap baby', imageUrl: `https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQDW62VewNVQsnpMI-CJcVnHZ93sspZVZVvXPUCI9Xvhub6AEC983dC2ZN4-IUIWdfpVTKsU23l7dxrOdbBqqeUSJ5OWBF8cDmUZ7KPjgeG75dr3oiULoWie30`, dataAiHint: 'baby soap', category: 'baby-care', prices: [
      { platformName: 'BigBasket', price: 150, url: `https://www.bigbasket.com/pd/${slugify('Himalaya Gentle Baby Soap (75g x 4)')}`, deliveryTime: '30-45 min', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '19', name: 'Britannia Good Day Cashew Cookies (200g)', normalizedName: 'cookies snacks', imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/1a7d8692-2d25-4925-be99-c72458dbe557/Britannia-Good-Day-Cashew-Cookies-Family-Pack.jpeg`, dataAiHint: 'cookies pack', category: 'snacks', prices: [
      { platformName: 'Zepto', price: 40, url: `https://www.zepto.com/product/${slugify('Britannia Good Day Cashew Cookies (200g)')}`, deliveryTime: '10-15 min', stockStatus: 'In Stock' },
      { platformName: 'Blinkit', price: 38, url: `https://blinkit.com/prn/${slugify('Britannia Good Day Cashew Cookies (200g)')}`, deliveryTime: '12-18 min', stockStatus: 'Low Stock' },
    ]
  },
  {
    id: '20', name: 'Red Label Natural Care Tea (500g)', normalizedName: 'tea beverage', imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1200,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/06f32b65-1517-4543-8a64-f8c5d1464f1d/Red-Label-Natural-Care-Natural-Tea-with-5-Ayurvedic-Ingredients.jpeg`, dataAiHint: 'tea powder', category: 'beverages', prices: [
      { platformName: 'JioMart', price: 215, url: `https://www.jiomart.com/p/${slugify('Red Label Natural Care Tea (500g)')}`, deliveryTime: '40-50 min', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '21', name: 'Kissan Fresh Tomato Ketchup (950g Bottle)', normalizedName: 'ketchup pantry', imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1200,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/5384ed9b-031e-4851-addd-235b4659f3f2/Kissan-Fresh-Tomato-Ketchup.jpeg`, dataAiHint: 'ketchup bottle', category: 'pantry', prices: [
      { platformName: 'Blinkit', price: 128, url: `https://blinkit.com/prn/${slugify('Kissan Fresh Tomato Ketchup (950g Bottle)')}`, deliveryTime: '10-15 min', stockStatus: 'In Stock' },
      { platformName: 'SwiggyInstamart', price: 132, url: `https://www.swiggy.com/instamart/item/${slugify('Kissan Fresh Tomato Ketchup (950g Bottle)')}`, deliveryTime: '20-25 min', stockStatus: 'Out of Stock' },
    ]
  },
  {
    id: '22', name: 'Cadbury Dairy Milk Silk Chocolate Bar (150g)', normalizedName: 'chocolate snacks', imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-2000-2000,pr-true,f-auto,q-80/cms/product_variant/a5408655-88d9-47c2-8733-543c5de6ea29/Cadbury-Dairy-Milk-Silk-Chocolate-Bar-150-g-Pack-of-2.jpeg`, dataAiHint: 'chocolate bar', category: 'snacks', prices: [
      { platformName: 'Zepto', price: 160, url: `https://www.zepto.com/product/${slugify('Cadbury Dairy Milk Silk Chocolate Bar (150g)')}`, deliveryTime: '10-12 min', stockStatus: 'In Stock' },
      { platformName: 'FlipkartMinutes', price: 162, url: `https://www.flipkart.com/grocery/product/${slugify('Cadbury Dairy Milk Silk Chocolate Bar (150g)')}`, deliveryTime: '20-30 min', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '23', name: 'Samsung 4K Smart TV (55 inch)', normalizedName: 'tv electronics', imageUrl: `https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTzokLxw36oi6si_9CLjhgI8y-2YfHA5PCvt7EkGpvsZnRivS1osX9PxM-HoScONjEY35yxi60Zl7m2lTEDWiE5qZoI4VkffsjDaQZSTLnGBkqKeu14r3eb`, dataAiHint: 'smart tv', category: 'electronics', prices: [
      { platformName: 'JioMart', price: 45000, url: `https://www.jiomart.com/p/${slugify('Samsung 4K Smart TV (55 inch)')}`, deliveryTime: '2-3 days', stockStatus: 'In Stock' },
      { platformName: 'FlipkartMinutes', price: 44500, url: `https://www.flipkart.com/product/${slugify('Samsung 4K Smart TV (55 inch)')}`, deliveryTime: 'Next day', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '24', name: 'Sony WH-1000XM5 Headphones (Flash Deal)',
    normalizedName: 'headphones audio flash deal',
    imageUrl: `https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697622241/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/270320_kozcvt.png?tr=w-640`,
    dataAiHint: 'headphones audio',
    category: 'electronics',
    prices: [
      { platformName: 'FlipkartMinutes', price: 25990, url: `https://www.flipkart.com/product/${slugify('Sony WH-1000XM5 Headphones (Flash Deal)')}`, deliveryTime: 'Next day', stockStatus: 'Low Stock' },
      { platformName: 'JioMart', price: 27990, url: `https://www.jiomart.com/p/${slugify('Sony WH-1000XM5 Headphones')}`, deliveryTime: '2-3 days', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '25', name: 'Nike Men\'s Running Shoes (Clearance Deal)',
    normalizedName: 'shoes fashion clearance deal',
    imageUrl: `https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREGqtp-YYJUtbYD6ShIVu7GHNbEIZTN3TfCqVSDDdr_VyVZF74WbjTYT8AX33ox5lhpipW0pw2ZoP-E-WJwQzGOMdmaLmAjJ10BQGH4bYgH4wqjzIILGfsNSw`,
    dataAiHint: 'running shoes',
    category: 'fashion',
    prices: [
      { platformName: 'JioMart', price: 3500, url: `https://www.jiomart.com/p/${slugify('Nike Men\'s Running Shoes (Clearance Deal)')}`, deliveryTime: '2-3 days', stockStatus: 'In Stock' },
      { platformName: 'FlipkartMinutes', price: 4500, url: `https://www.flipkart.com/product/${slugify('Nike Men\'s Running Shoes')}`, deliveryTime: 'Next day', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '26', name: 'Levi\'s Men\'s Jeans', normalizedName: 'denim jeans fashion', imageUrl: `https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7bK2iWHlT66U1u1lHDxH3TZzNE75y8ZMdjKXKKJDJbzXGYtYtB5iXPCh3CQVojTRHZkeu7Ehb4ZIUPbxA50yIXYhK2LjgUvFOpm7zyISoNs02phwUMlmvOw`, dataAiHint: 'denim jeans', category: 'fashion', prices: [
      { platformName: 'JioMart', price: 1999, url: `https://www.jiomart.com/p/${slugify('Levi\'s Men\'s Jeans')}`, deliveryTime: '3-5 days', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '27', name: 'Prestige Mixer Grinder', normalizedName: 'mixer grinder appliances', imageUrl: `https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRO6HC1rbk81O_wSNif-ehFBf34oalFpb8F-LyPKeKGbb-3SF1pT5DC9NibSmHW_bzxWEzWD0XWdaU4whLl8tEwwihAhdeeRBqcZBhmGKo`, dataAiHint: 'kitchen appliance', category: 'appliances', prices: [
      { platformName: 'BigBasket', price: 2500, url: `https://www.bigbasket.com/pd/${slugify('Prestige Mixer Grinder')}`, deliveryTime: 'Same day', stockStatus: 'In Stock' },
      { platformName: 'FlipkartMinutes', price: 2450, url: `https://www.flipkart.com/product/${slugify('Prestige Mixer Grinder')}`, deliveryTime: 'Next day', stockStatus: 'Out of Stock' },
    ]
  },
  {
    id: '28', name: 'Dell XPS 13 Laptop', normalizedName: 'laptop computer electronics', imageUrl: `https://d154tzc5g79pmr.cloudfront.net/media/catalog/product/x/s/xs9345t-cnb-05000ff095-gy-jp-kb_1.png`, dataAiHint: 'laptop computer', category: 'electronics', prices: [
      { platformName: 'JioMart', price: 95000, url: `https://www.jiomart.com/p/${slugify('Dell XPS 13 Laptop')}`, deliveryTime: '2-4 days', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '29', name: 'Apple Watch Series 9', normalizedName: 'smartwatch wearable electronics', imageUrl: `https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/TS1Cs5XROW-apple-watch-series-9-494226842-i-1-1200wx1200h.jpeg`, dataAiHint: 'smartwatch wearable', category: 'electronics', prices: [
      { platformName: 'FlipkartMinutes', price: 41900, url: `https://www.flipkart.com/product/${slugify('Apple Watch Series 9')}`, deliveryTime: 'Next day', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '30', name: 'Men\'s Cotton T-Shirt (Black)', normalizedName: 'black t-shirt fashion', imageUrl: `https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSiNkhOuYOTTsHz24SM5Q8qOX7SU2D8azUVj07_HM0AczZDq-HGxZzc7c99LGO91AskLspMnxmWNhuH3fmmEcxOpRcdgDfU8mgkPDvAftZ1zpS7VYmlhz4BhQ`, dataAiHint: 'black t-shirt', category: 'fashion', prices: [
      { platformName: 'JioMart', price: 499, url: `https://www.jiomart.com/p/${slugify('Men\'s Cotton T-Shirt (Black)')}`, deliveryTime: '3-5 days', stockStatus: 'Low Stock' },
    ]
  },
  {
    id: '31', name: 'Adidas Stan Smith Sneakers', normalizedName: 'white sneakers fashion', imageUrl: `https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/b/1bf5547ID0268_1.jpg?rnd=20200526195200&tr=w-1080`, dataAiHint: 'white sneakers', category: 'fashion', prices: [
      { platformName: 'FlipkartMinutes', price: 6500, url: `https://www.flipkart.com/product/${slugify('Adidas Stan Smith Sneakers')}`, deliveryTime: '1-2 days', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '32', name: 'Philips Coffee Maker', normalizedName: 'drip coffee appliances', imageUrl: `https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1737117330/Croma%20Assets/Small%20Appliances/Coffee%20Tea%20Makers/Images/312960_b1avqr.png?tr=w-640`, dataAiHint: 'drip coffee', category: 'appliances', prices: [
      { platformName: 'BigBasket', price: 3200, url: `https://www.bigbasket.com/pd/${slugify('Philips Coffee Maker')}`, deliveryTime: 'Same day', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '33', name: 'Philips Air Fryer XL', normalizedName: 'air fryer kitchen appliances', imageUrl: `https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724858838/Croma%20Assets/Small%20Appliances/Fryers%20and%20Grills/Images/306892_0_gkc6j1.png?tr=w-640`, dataAiHint: 'air fryer kitchen', category: 'appliances', prices: [
      { platformName: 'JioMart', price: 8999, url: `https://www.jiomart.com/p/${slugify('Philips Air Fryer XL')}`, deliveryTime: '2-3 days', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '34', name: 'Finish Dishwasher Tablets (30 count)', normalizedName: 'dishwasher soap household', imageUrl: `https://m.media-amazon.com/images/I/81x77IqjarL._SX679_.jpg`, dataAiHint: 'dishwasher soap', category: 'household', prices: [
      { platformName: 'BigBasket', price: 550, url: `https://www.bigbasket.com/pd/${slugify('Finish Dishwasher Tablets (30 count)')}`, deliveryTime: 'Next day', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '35', name: 'Head & Shoulders Anti-Dandruff Shampoo (340ml)', normalizedName: 'shampoo bottle personal care', imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/09edf769-8096-4141-993d-6e6eae3ffb96/Head-Shoulders-Anti-Dandruff-Shampoo-Cool-Menthol.jpeg`, dataAiHint: 'shampoo bottle', category: 'personal-care', prices: [
      { platformName: 'Zepto', price: 280, url: `https://www.zepto.com/product/${slugify('Head & Shoulders Anti-Dandruff Shampoo (340ml)')}`, deliveryTime: '10-15 min', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '36', name: 'Dove Sensitive Skin Body Wash (500ml)', normalizedName: 'body wash personal care', imageUrl: `https://cdn.zeptonow.com/production/ik-seo/tr:w-1100,ar-1100-1100,pr-true,f-auto,q-80/cms/product_variant/1327a88c-eeaa-4ac2-9a71-5ac6257b1cef/Dove-Gentle-Nourishing-Body-Wash-24H-Moisture-Lock-For-Sensitive-Skin.jpg`, dataAiHint: 'body wash', category: 'personal-care', prices: [
      { platformName: 'Blinkit', price: 350, url: `https://blinkit.com/prn/${slugify('Dove Sensitive Skin Body Wash (500ml)')}`, deliveryTime: '15-20 min', stockStatus: 'Low Stock' },
    ]
  },
  {
    id: '37', name: 'Revital H Multivitamin Capsules (30 count)', normalizedName: 'vitamin pills health', imageUrl: `https://m.media-amazon.com/images/I/61kuT-rqijL._SX679_.jpg`, dataAiHint: 'vitamin pills', category: 'health', prices: [
      { platformName: 'BigBasket', price: 310, url: `https://www.bigbasket.com/pd/${slugify('Revital H Multivitamin Capsules (30 count)')}`, deliveryTime: 'Same day', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '38', name: 'The Alchemist by Paulo Coelho', normalizedName: 'book cover books', imageUrl: `https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ0JgC4-B-TUbqHh-NgZhdCaqbwiGpUQPh1DixhORSLBR02gcXM8DX3PYTPmQt6lp_HqZk7FdyIcX79B9Ko_qK_BoH8kJi-n_Wsd9OzWz6EkY6Js6Mj6mIr`, dataAiHint: 'book cover', category: 'books', prices: [
      { platformName: 'FlipkartMinutes', price: 250, url: `https://www.flipkart.com/product/${slugify('The Alchemist by Paulo Coelho')}`, deliveryTime: 'Next day', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '39', name: 'Ergonomic Office Chair', normalizedName: 'office chair furniture', imageUrl: `https://rukminim2.flixcart.com/image/1200/1200/xif0q/office-study-chair/4/a/i/1-pvc-polyvinyl-chloride-62-23-matrix-001-flipkart-perfect-homes-original-imaha6aadhy35jfc.jpeg`, dataAiHint: 'office chair', category: 'furniture', prices: [
      { platformName: 'JioMart', price: 7500, url: `https://www.jiomart.com/p/${slugify('Ergonomic Office Chair')}`, deliveryTime: '3-5 days', stockStatus: 'In Stock' },
    ]
  },
  {
    id: '40', name: 'Anti-Skid Yoga Mat (6mm)', normalizedName: 'yoga mat fitness sports', imageUrl: `https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTeWa2zlHMtyB0awFGZZI6FqyNmJ1udzianDR08mO6Zj3Z52QexeT3Vb2R-rV0LxLbFFs559bvy5XCT17wTkn5xKlsOHiLHSVBj_UXjT0bec_H3j6_-lKT3`, dataAiHint: 'yoga mat fitness', category: 'sports', prices: [
      { platformName: 'FlipkartMinutes', price: 799, url: `https://www.flipkart.com/product/${slugify('Anti-Skid Yoga Mat (6mm)')}`, deliveryTime: '1-2 days', stockStatus: 'In Stock' },
    ]
  },
  {
    id: 'deal-01',
    name: "Weekend Pantry Bonanza Deal - Essential Combo",
    normalizedName: "pantry combo weekend bonanza deal",
    imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoM7YLFCcRqXQUG2Gt21aIQomUN5DyIf7gjQ&s`,
    dataAiHint: "grocery items",
    category: "pantry",
    prices: [
      { platformName: 'BigBasket', price: 499, url: `https://www.bigbasket.com/pd/${slugify('Weekend Pantry Bonanza Deal')}`, deliveryTime: 'Same Day', stockStatus: 'In Stock' },
      { platformName: 'JioMart', price: 479, url: `https://www.jiomart.com/p/${slugify('Weekend Pantry Bonanza Deal')}`, deliveryTime: 'Next Day', stockStatus: 'In Stock' },
      { platformName: 'Zepto', price: 510, url: `https://www.zepto.com/product/${slugify('Weekend Pantry Bonanza Deal')}`, deliveryTime: '15-20 min', stockStatus: 'Low Stock' },
    ]
  },
  {
    id: '41',
    name: 'Stainless Steel Cookware Set (5 pieces)',
    normalizedName: 'cookware set kitchen home-kitchen',
    imageUrl: `https://m.media-amazon.com/images/I/719PxyllBdL.jpg`,
    dataAiHint: 'pots pans',
    category: 'home-kitchen',
    prices: [
      { platformName: 'BigBasket', price: 2999, url: `https://www.bigbasket.com/pd/${slugify('Stainless Steel Cookware Set (5 pieces)')}`, deliveryTime: 'Next day', stockStatus: 'In Stock' },
      { platformName: 'JioMart', price: 2850, url: `https://www.jiomart.com/p/${slugify('Stainless Steel Cookware Set (5 pieces)')}`, deliveryTime: '2-3 days', stockStatus: 'Low Stock' },
    ],
  },
  {
    id: '42',
    name: 'Smart Air Purifier for Home',
    normalizedName: 'air purifier home-kitchen appliances',
    imageUrl: `https://media.croma.com/image/upload/v1748932982/Croma%20Assets/Small%20Appliances/Air%20Purifier/Images/308984_0_yweqjb.png`,
    dataAiHint: 'air purifier',
    category: 'home-kitchen',
    prices: [
      { platformName: 'FlipkartMinutes', price: 8500, url: `https://www.flipkart.com/product/${slugify('Smart Air Purifier for Home')}`, deliveryTime: 'Next day', stockStatus: 'In Stock' },
    ],
  },
  {
    id: '43',
    name: 'Wireless Keyboard and Mouse Combo',
    normalizedName: 'keyboard mouse office-supplies electronics',
    imageUrl: `https://m.media-amazon.com/images/I/71icSLlBIvL.jpg`,
    dataAiHint: 'keyboard mouse',
    category: 'office-supplies',
    prices: [
      { platformName: 'JioMart', price: 1200, url: `https://www.jiomart.com/p/${slugify('Wireless Keyboard and Mouse Combo')}`, deliveryTime: '1-2 days', stockStatus: 'In Stock' },
    ],
  },
  {
    id: '44',
    name: 'A4 Printing Paper Ream (500 Sheets)',
    normalizedName: 'printing paper office-supplies',
    imageUrl: `https://m.media-amazon.com/images/I/61GTsN1a4PL.jpg`,
    dataAiHint: 'paper ream',
    category: 'office-supplies',
    prices: [
      { platformName: 'BigBasket', price: 350, url: `https://www.bigbasket.com/pd/${slugify('A4 Printing Paper Ream (500 Sheets)')}`, deliveryTime: 'Same day', stockStatus: 'In Stock' },
    ],
  },
  {
    id: '45',
    name: 'Pedigree Adult Dry Dog Food (Chicken, 3kg)',
    normalizedName: 'dog food pet-supplies',
    imageUrl: `https://drpet.in/wp-content/uploads/2021/12/PEDIGREE-ADULT-CHICKEN-VEGETABLE-1.2-KG.jpeg`,
    dataAiHint: 'dog food',
    category: 'pet-supplies',
    prices: [
      { platformName: 'BigBasket', price: 750, url: `https://www.bigbasket.com/pd/${slugify('Pedigree Adult Dry Dog Food (Chicken, 3kg)')}`, deliveryTime: 'Next day', stockStatus: 'In Stock' },
      { platformName: 'Zepto', price: 760, url: `https://www.zepto.com/product/${slugify('Pedigree Adult Dry Dog Food (Chicken, 3kg)')}`, deliveryTime: '20-30 min', stockStatus: 'Low Stock' },
    ],
  },
  {
    id: '46',
    name: 'Clumping Cat Litter (Lavender Scent, 5L)',
    normalizedName: 'cat litter pet-supplies',
    imageUrl: `https://www.jiomart.com/images/product/original/rvxn96dgei/happy-cat-clumping-cat-litter-sand-lavender-scent-5-l-5l-buy-1-and-get-1-free-product-images-orvxn96dgei-p596407725-0-202212161302.jpg?im=Resize=(420,420)`,
    dataAiHint: 'cat litter',
    category: 'pet-supplies',
    prices: [
      { platformName: 'Zepto', price: 450, url: `https://www.zepto.com/product/${slugify('Clumping Cat Litter (Lavender Scent, 5L)')}`, deliveryTime: '15-25 min', stockStatus: 'In Stock' },
    ],
  },
  {
    id: '47',
    name: 'Building Blocks Set (Classic, 500 Pieces) - Great Deal!',
    normalizedName: 'building blocks toys-games great deal',
    imageUrl: `https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSH3sy5BxKuO57iu23U7ZeCsowB6BdtPFbfpS32t--zSh_CEoJhmIjvE7-GqVRMyaniEuYBCFH8gGvWDOsQM90Rdby8575PYjcLC5K7RsnH`,
    dataAiHint: 'toy blocks',
    category: 'toys-games',
    prices: [
      { platformName: 'FlipkartMinutes', price: 999, url: `https://www.flipkart.com/product/${slugify('Building Blocks Set (Classic, 500 Pieces)')}`, deliveryTime: 'Next day', stockStatus: 'In Stock' },
      { platformName: 'JioMart', price: 1050, url: `https://www.jiomart.com/p/${slugify('Building Blocks Set (Classic, 500 Pieces)')}`, deliveryTime: '2-3 days', stockStatus: 'In Stock' },
    ],
  },
  {
    id: '48',
    name: 'Remote Control Car (Racing Red)',
    normalizedName: 'rc car toys-games',
    imageUrl: `https://images-eu.ssl-images-amazon.com/images/I/51-Fsh9rMKL._AC_UL495_SR435,495_.jpg`,
    dataAiHint: 'remote car',
    category: 'toys-games',
    prices: [
      { platformName: 'JioMart', price: 1200, url: `https://www.jiomart.com/p/${slugify('Remote Control Car (Racing Red)')}`, deliveryTime: '1-2 days', stockStatus: 'Low Stock' },
    ],
  },
  {
    id: '49',
    name: 'Car Phone Mount Holder (Dashboard/Windshield)',
    normalizedName: 'car phone mount automotive-accessories',
    imageUrl: `https://m.media-amazon.com/images/I/71PmeKRPQtL.jpg`,
    dataAiHint: 'phone mount',
    category: 'automotive-accessories',
    prices: [
      { platformName: 'FlipkartMinutes', price: 399, url: `https://www.flipkart.com/product/${slugify('Car Phone Mount Holder')}`, deliveryTime: 'Next day', stockStatus: 'In Stock' },
      { platformName: 'JioMart', price: 420, url: `https://www.jiomart.com/p/${slugify('Car Phone Mount Holder')}`, deliveryTime: '2-3 days', stockStatus: 'In Stock' },
    ],
  },
  {
    id: '50',
    name: 'Microfiber Cleaning Cloths (Pack of 5)',
    normalizedName: 'microfiber cloths automotive-accessories household',
    imageUrl: `https://m.media-amazon.com/images/I/41AfB-0rhRL._SX300_SY300_QL70_FMwebp_.jpg`,
    dataAiHint: 'cleaning cloths',
    category: 'automotive-accessories',
    prices: [
      { platformName: 'BigBasket', price: 250, url: `https://www.bigbasket.com/pd/${slugify('Microfiber Cleaning Cloths (Pack of 5)')}`, deliveryTime: 'Same day', stockStatus: 'In Stock' },
      { platformName: 'Zepto', price: 240, url: `https://www.zepto.com/product/${slugify('Microfiber Cleaning Cloths (Pack of 5)')}`, deliveryTime: '15-20 min', stockStatus: 'In Stock' },
    ],
  },
  {
    id: '51',
    name: 'Basic Gardening Tool Set (Shovel, Trowel, Rake)',
    normalizedName: 'gardening tools gardening',
    imageUrl: `https://m.media-amazon.com/images/I/31VtGSd-IAL.jpg`,
    dataAiHint: 'garden tools',
    category: 'gardening',
    prices: [
      { platformName: 'BigBasket', price: 599, url: `https://www.bigbasket.com/pd/${slugify('Basic Gardening Tool Set')}`, deliveryTime: 'Next day', stockStatus: 'In Stock' },
      { platformName: 'JioMart', price: 575, url: `https://www.jiomart.com/p/${slugify('Basic Gardening Tool Set')}`, deliveryTime: '2-4 days', stockStatus: 'Low Stock' },
    ],
  },
  {
    id: '52',
    name: 'Premium Gel Pens (Pack of 12)',
    normalizedName: 'gel pens stationery office',
    imageUrl: `https://m.media-amazon.com/images/I/71sHdzvOIBL._SX522_.jpg`,
    dataAiHint: 'gel pens',
    category: 'stationery',
    prices: [
      { platformName: 'BigBasket', price: 150, url: `https://www.bigbasket.com/pd/${slugify('Premium Gel Pens (Pack of 12)')}`, deliveryTime: 'Same day', stockStatus: 'In Stock' },
      { platformName: 'JioMart', price: 145, url: `https://www.jiomart.com/p/${slugify('Premium Gel Pens (Pack of 12)')}`, deliveryTime: '1-2 days', stockStatus: 'In Stock' },
    ],
  },
  {
    id: '53',
    name: 'Eco-Friendly All-Purpose Cleaner (500ml)',
    normalizedName: 'eco cleaner household cleaning-supplies',
    imageUrl: `https://m.media-amazon.com/images/I/51wBZZ0oTFL._SX522_.jpg`,
    dataAiHint: 'cleaning spray',
    category: 'cleaning-supplies',
    prices: [
      { platformName: 'Zepto', price: 99, url: `https://www.zepto.com/product/${slugify('Eco-Friendly All-Purpose Cleaner (500ml)')}`, deliveryTime: '10-15 min', stockStatus: 'In Stock' },
      { platformName: 'BigBasket', price: 105, url: `https://www.bigbasket.com/pd/${slugify('Eco-Friendly All-Purpose Cleaner (500ml)')}`, deliveryTime: '20-30 min', stockStatus: 'Low Stock' },
    ],
  },
  {
    id: '54',
    name: 'Herbal Hand Sanitizer (200ml)',
    normalizedName: 'hand sanitizer health personal-care',
    imageUrl: `https://m.media-amazon.com/images/I/71r4OfRJThL._SX522_.jpg`,
    dataAiHint: 'sanitizer bottle',
    category: 'health',
    prices: [
      { platformName: 'Blinkit', price: 70, url: `https://blinkit.com/prn/${slugify('Herbal Hand Sanitizer (200ml)')}`, deliveryTime: '10-12 min', stockStatus: 'In Stock' },
      { platformName: 'SwiggyInstamart', price: 75, url: `https://www.swiggy.com/instamart/item/${slugify('Herbal Hand Sanitizer (200ml)')}`, deliveryTime: '15-20 min', stockStatus: 'In Stock' },
    ],
  },
  {
    id: '55',
    name: 'Organic Popcorn Kernels (500g)',
    normalizedName: 'popcorn kernels snacks pantry',
    imageUrl: `https://m.media-amazon.com/images/I/61qp+08K9UL._SY741_.jpg`,
    dataAiHint: 'popcorn kernels',
    category: 'snacks',
    prices: [
      { platformName: 'BigBasket', price: 85, url: `https://www.bigbasket.com/pd/${slugify('Organic Popcorn Kernels (500g)')}`, deliveryTime: '25-35 min', stockStatus: 'In Stock' },
      { platformName: 'Zepto', price: 90, url: `https://www.zepto.com/product/${slugify('Organic Popcorn Kernels (500g)')}`, deliveryTime: '10-15 min', stockStatus: 'Low Stock' },
      { platformName: 'JioMart', price: 80, url: `https://www.jiomart.com/p/${slugify('Organic Popcorn Kernels (500g)')}`, deliveryTime: '30-40 min', stockStatus: 'In Stock' },
    ],
  },
];

export const platformNames: PlatformName[] = ['Zepto', 'BigBasket', 'Blinkit', 'SwiggyInstamart', 'JioMart', 'FlipkartMinutes'];

export interface InfoCardItem {
  title: string;
  description: string;
  iconName: string;
}

export const howItWorksSteps: InfoCardItem[] = [
  {
    title: "1. Search Any Product",
    description: "Use our smart search to find exactly what you're looking for, from groceries to electronics.",
    iconName: "ListChecks",
  },
  {
    title: "2. Compare Prices Instantly",
    description: "We fetch and compare prices from multiple online stores like Zepto, BigBasket, Blinkit, and more.",
    iconName: "ShoppingCart",
  },
  {
    title: "3. Save Money & Time",
    description: "Choose the best deal and go directly to the store to complete your purchase. Smart shopping made easy!",
    iconName: "Percent",
  },
];

// This forEach loop ensures data consistency for products at runtime.
mockProducts.forEach(product => {
  // Ensure imageUrl is standardized to local paths ONLY if it's not already an external URL or specific local.
  if (!product.imageUrl.startsWith('http') && !product.imageUrl.startsWith('/product-images/')) {
    // console.warn(`Standardizing imageUrl for '${product.name}' to local path format (if not already external or specific local).`);
    product.imageUrl = `/product-images/${slugify(product.name)}.png`;
  }
  // Ensure dataAiHint exists, defaulting to category if not specified
  if (!product.dataAiHint) {
    product.dataAiHint = product.category || 'product';
  }
  // Ensure prices array exists
  if (!product.prices) {
    product.prices = [];
  }
  product.prices.forEach(price => {
    if (!price.deliveryTime) price.deliveryTime = 'Delivery time N/A';
    if (!price.stockStatus) price.stockStatus = 'In Stock';
    // Only create a generic URL if one isn't provided or is a placeholder '#'
    if (!price.url || price.url === '#') {
        const platformBase = price.platformName.toLowerCase().replace(/\s+/g, '');
        // Avoid overwriting already specific URLs for product id '1' which might be manually set
        if (product.id === '1' && price.platformName === 'Zepto' && price.url.includes('kashmiri-select')) {
            // Do nothing, keep the specific URL
        } else {
            price.url = `https://www.${platformBase}.com/product/${slugify(product.name)}`;
        }
    }
  });
});

// Ensure unique IDs for products (simple check and warning for duplicates)
const productIds = new Set<string>();
mockProducts.forEach((p) => {
  if (productIds.has(p.id)) {
    console.warn(`Duplicate Product ID detected: '${p.id}' for product '${p.name}'. Ensure all product IDs are unique.`);
  }
  productIds.add(p.id);
});


console.log(`Product Service: Using local mockData.ts. Total mock products: ${mockProducts.length}`);
console.log(`Product Service: Using local mockData.ts. Total mock categories: ${mockCategories.length}`);

    

    

