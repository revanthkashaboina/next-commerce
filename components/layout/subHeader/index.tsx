'use client'
import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import Typesense from 'typesense';

const SubHeader: React.FC = () => {
  const [showCategories, setShowCategories] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>([]);

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

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

//   useEffect(() => {
//     // Fetch categories from the Typesense API
//     async function fetchCategories() {
//       try {
//         const factes:any = await client.collections('Products').documents().search({
//           q: '*',
//           query_by: 'title',
//           filter_by:"category",
//           facet_by: "category", 
//           max_facet_values: 10
//         });
//         if (facets && facets.category) {
//           setCategories(facets.category);
//         }
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     }

//     fetchCategories();
//   }, [client]);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 border-b-4 border-gray-500">
      <div className="flex items-center justify-start w-full" style={{ marginLeft: '80px' }}>
        <div className="dropdown inline-block relative">
          <div onClick={toggleCategories} className="flex items-center cursor-pointer">
            <span className="text-black font-semibold py-2 px-4" style={{ fontSize: '25px', fontFamily: 'Arial', color: 'gray' }}>
              ALL CATEGORIES
            </span>
            <svg
              className="h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ marginLeft: '-15px' }}
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {showCategories && (
            <ul className="dropdown-content absolute text-gray-700 pt-1">
              <li className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                Category 1
              </li>
              <li className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                Category 2
              </li>
            </ul>
          )}
        </div>

        {/* <div className="dropdown inline-block relative">
          <div className="flex items-center cursor-pointer">
            <span className="text-black font-semibold py-2 px-4">The Family</span>
            <svg
              className="h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ marginLeft: '-15px' }}
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div> */}

        <Link href="#">
          <span className="text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Recipes
          </span>
        </Link>
        <Link href="#">
          <span className="text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Stores Locator
          </span>
        </Link>
        <Link href="#">
          <span className="text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            OFC Partners
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default SubHeader;
