import Typesense from 'typesense';
import {Product} from './types';

export async function getProduct(handle: string): Promise<Product | undefined> {
    try {
      const client = new Typesense.Client({
        nodes: [
          {
            host: '95.216.171.30',
            port: 8108,
            protocol: 'http'
          }
        ],
        apiKey: 'exceloid-test'
      });
  
      const searchParameters = {
        q: handle,
        query_by: 'handle',
        // num_typos: 0,
        per_page: 1
      };
      // console.log(searchParameters)
  
      const searchResults:any = await client.collections('Products').documents().search(searchParameters);
      // console.log("searchResults===========================>", searchResults)
  
      if (searchResults && searchResults.hits.length > 0) {
        const product = searchResults.hits[0];
        // console.log("product====================================>", product)
        const obj = {
          id: product?.document.id,
          handle: product?.document.handle,
          availableForSale: product?.document.availableForSale,
          title: product?.document.title,
          description: product?.document.description,
          descriptionHtml: product?.document.descriptionHtml,
          featuredImage: product?.document.featuredImage,
          images: product?.document.images,
          priceRange: product?.document.priceRange,
          category: product?.document.category,
          options: product?.document.options,
          seo: product?.document.seo,
          tags: product?.document.tags,
          updatedAt: product?.document.updatedAt,
          variants: product?.document.variants,
          highlights: product?.document.highlights
        };
  
        return obj;
      } else {
        throw new Error('Product not found'); 
      }
    } catch (error: any) {
      console.error('Error fetching product:', error.message);
      throw error;
    }
  }