// import { Carousell } from 'components/carousel';
import Carousell from 'components/carousel';
import AboutUsCard from 'components/aboutUs';
import AboutProductsCard from 'components/aboutProducts';
import ShopByCategory from 'components/shopByCategory';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Carousell />
      <AboutUsCard />
      <AboutProductsCard />
      <ShopByCategory />
      <ThreeItemGrid />
      <Suspense>
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
