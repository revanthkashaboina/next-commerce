// import { GridTileImage } from 'components/grid/tile';
// import { getCollectionProducts } from 'lib/shopify';
// import type { Product } from 'lib/shopify/types';
// import Link from 'next/link';

// function ThreeItemGridItem({
//   item,
//   size,
//   priority
// }: {
//   item: Product;
//   size: 'full' | 'half';
//   priority?: boolean;
// }) {
//   return (
//     <div
//       className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
//     >
//       <Link className="relative block aspect-square h-full w-full" href={`/product/${item.handle}`}>
//         <GridTileImage
//           src={item.featuredImage.url}
//           fill
//           sizes={
//             size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
//           }
//           priority={priority}
//           alt={item.title}
//           label={{
//             position: size === 'full' ? 'center' : 'bottom',
//             title: item.title as string,
//             amount: item.priceRange.maxVariantPrice.amount,
//             currencyCode: item.priceRange.maxVariantPrice.currencyCode
//           }}
//         />
//       </Link>
//     </div>
//   );
// }

// export async function ThreeItemGrid() {
//   // Collections that start with `hidden-*` are hidden from the search page.
//   const homepageItems = await getCollectionProducts({
//     collection: 'hidden-homepage-featured-items'
//   });

//   if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

//   const [firstProduct, secondProduct, thirdProduct] = homepageItems;

//   return (
//     <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
//       <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
//       <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
//       <ThreeItemGridItem size="half" item={thirdProduct} />
//     </section>
//   );
// }




'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Typesense from 'typesense';

interface Product {
  document: {
    handle: string;
    title: string;
    featuredImage: {
      url: string;
    };
  };
}

export const ThreeItemGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPage = 100;

  useEffect(() => {
    const client = new Typesense.Client({
      nodes: [
        {
          host: 'typesense.exceloid.in',
          port: 8108,
          protocol: 'https'
        }
      ],
      apiKey: 'exceloid-test'
    });

    async function fetchProducts() {
      try {
        const response :any = await client.collections('Products').documents().search({
          q: '*',
          per_page: perPage,
          page: currentPage,
          preset :'query'
        });
        setProducts((prevProducts) => [...prevProducts, ...response.hits]);
      } catch (error : any) {
        setError(error.message || 'Error fetching products');
      }
    }

    fetchProducts();
  }, [currentPage]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:"2%" }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', paddingLeft: '8%' }}>
        {products.map((product, id) => (
          <Link
            href={`/product/${product.document.handle}`}
            key={id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '5px',
              width: '300px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
            }}
          >
            <img
              src={product.document.featuredImage.url}
              alt={product.document.title}
              style={{
                width: '100%',
                maxHeight: '300px',
                objectFit: 'contain',
                marginBottom: '10px',
                borderRadius: '5px',
                height: '80%'
              }}
            />
            <h3 style={{ margin: '0' }}>{product.document.title}</h3>
          </Link>
        ))}
      </div>
      <button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>Load More</button>
    </div>
  );
};

