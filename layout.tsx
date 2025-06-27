
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
// import { getAllCategories } from '@/lib/services/product-service'; // No longer needed here
// import type { Category } from '@/lib/types'; // No longer needed here

export const metadata: Metadata = {
  title: 'QuickCompare - India\'s #1 Price Comparison App',
  description: 'Compare prices from Zepto, BigBasket, Blinkit, Swiggy Instamart, Jio Mart and more. Find the best deals on groceries, electronics, and millions of products.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const categories: Category[] = await getAllCategories(); // Categories will be fetched on the dedicated categories page

  return (
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <body className="antialiased flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-grow container py-6 md:py-8">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
