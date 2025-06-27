
'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react'; // Removed MessageCircle import
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { normalizeProductQuery } from '@/ai/flows/normalize-product-query'; // AI Flow
import { useToast } from '@/hooks/use-toast';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    try {
      // Call the AI flow to normalize the query
      const { normalizedQuery } = await normalizeProductQuery({ query: searchQuery });
      router.push(`/search?q=${encodeURIComponent(normalizedQuery)}`);
    } catch (error) {
      console.error('Error normalizing query:', error);
      toast({
        title: 'Search Error',
        description: 'Could not normalize search query. Using original query.',
        variant: 'destructive',
      });
      // Fallback to original query if AI fails
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    } finally {
      // Don't setSearchQuery('') here to keep the input filled on the search page if search bar is there too
      // setIsLoading(false); // Navigation will unmount or re-render, so explicit reset might not be needed
      // However, if the search bar remains on the same page or is part of a layout, manage loading state carefully.
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full items-center space-x-2 md:space-x-3">
      <Input
        type="search"
        placeholder="Search for products (e.g., apple, milk, bread...)"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-grow text-base md:text-sm"
        aria-label="Search products"
        disabled={isLoading}
      />
      <Button type="submit" disabled={isLoading || !searchQuery.trim()} className="bg-primary hover:bg-primary/90">
        {isLoading ? (
          <svg className="animate-spin h-5 w-5 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          <Search className="h-5 w-5" />
        )}
        <span className="sr-only">Search</span>
      </Button>
      {/* Chatbot Icon Button Removed */}
    </form>
  );
}
