// 'use client';

// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import { createUrl } from 'lib/utils';
// import { useRouter, useSearchParams } from 'next/navigation';

// export default function Search() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   function onSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     const val = e.target as HTMLFormElement;
//     const search = val.search as HTMLInputElement;
//     const newParams = new URLSearchParams(searchParams.toString());

//     if (search.value) {
//       newParams.set('q', search.value);
//     } else {
//       newParams.delete('q');
//     }

//     router.push(createUrl('/search', newParams));
//   }

//   return (
//     <form onSubmit={onSubmit} className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
//       <input
//         key={searchParams?.get('q')}
//         type="text"
//         name="search"
//         placeholder="Search for products..."
//         autoComplete="off"
//         defaultValue={searchParams?.get('q') || ''}
//         className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
//       />
//       <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
//         <MagnifyingGlassIcon className="h-4" />
//       </div>
//     </form>
//   );
// }


// 'use client';
// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import { createUrl } from 'lib/utils';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { useEffect, useState } from 'react';
// import Typesense from 'typesense';

// export default function Search() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [suggestions, setSuggestions] = useState<string[]>([]);
//   const [typesenseClient, setTypesenseClient] = useState<any>(null);

//   useEffect(() => {
//     const client = new Typesense.Client({
//       nodes: [
//         {
//           host: '95.216.171.30',
//           port: 8108,
//           protocol: 'http'
//         }
//       ],
//       apiKey: 'exceloid-test'
//     });
//     setTypesenseClient(client);
//   }, []);

//   let typingTimeout: NodeJS.Timeout | null = null;

//   async function fetchSuggestions(query: string) {
//     if (!typesenseClient) return;

//     try {
//       const response: any = await typesenseClient.collections('Products').documents().search({
//         q: query,
//         query_by: 'title',
//         per_page: 5,
//       });

//       console.log("response======================", response)

//       const suggestedProducts = response.hits.map((hit: any) => hit.title);
//       // console.log("suggestedProducts=========================", suggestedProducts)
//       setSuggestions(suggestedProducts);
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//     }
//   }

//   function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const query = event.target.value;

//     if (typingTimeout) {
//       clearTimeout(typingTimeout);
//     }

//     typingTimeout = setTimeout(() => {
//       fetchSuggestions(query);
//     }, 300); 
//   }

//   function onSelectSuggestion(selectedSuggestion: string) {
//     const newParams = new URLSearchParams(searchParams.toString());
//     newParams.set('q', selectedSuggestion);
//     router.push(createUrl('/search', newParams));
//   }

//   return (
//     <div className="relative w-full lg:w-80 xl:w-full">
//       <input
//         type="text"
//         name="search"
//         placeholder="Search for products..."
//         autoComplete="off"
//         defaultValue={searchParams?.get('q') || ''}
//         className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
//         onChange={onInputChange}
//       />
//       {suggestions.length > 0 && (
//         <div className="absolute z-10 mt-1 py-2 bg-white rounded-lg shadow-lg w-full">
//           {suggestions.map((suggestion, index) => (
//             <div
//               key={index}
//               onClick={() => onSelectSuggestion(suggestion)}
//               className="cursor-pointer px-4 py-2 hover:bg-gray-100"
//             >
//               {suggestion}
//             </div>
//           ))}
//         </div>
//       )}
//       <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
//         <MagnifyingGlassIcon className="h-4" />
//       </div>
//     </div>
//   );
// }








'use client'
import { useEffect, useState, useRef } from 'react';
import Typesense from 'typesense';

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

export default function Search() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<{ title: string; imageUrl: string }[]>([]);
  const [showNotFound, setShowNotFound] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchSuggestions = async (searchQuery: string) => {
      try {
        if (searchQuery.length === 0) {
          setSuggestions([]);
          setShowNotFound(false);
          return;
        }

        const searchParameters = {
          q: searchQuery,
          query_by: 'title',
          per_page: 5
        };

        const searchResult: any = await client.collections('Products').documents().search(searchParameters);
        //console.log("searchResult===============================", searchResult)

        if (isMounted) {
          const newSuggestions = searchResult.hits.map((hit: any) => ({
            title: hit.document.title,
            imageUrl: hit.document.featuredImage.url
          }));

          setSuggestions(newSuggestions);

          if (newSuggestions.length === 0) {
            setShowNotFound(true);
          } else {
            setShowNotFound(false);
          }
        }
      } catch (error) {
        //console.error(error)
        console.error('Typesense search error:', error);
        setSuggestions([]);
        setShowNotFound(false);
      }
    };

    if (query.length > 0) {
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
      setShowNotFound(false);
    }

    return () => {
      isMounted = false;
    };
  }, [query]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSuggestionClick = (clickedSuggestion: { title: string; imageUrl: string }) => {
    setQuery(clickedSuggestion.title); 
    setSuggestions([]); 
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleInputChange}
        style={{
          height: '40px',
          width: '400px',
          margin: '10px',
          borderRadius: '20px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '10px',
        }}
      />
      {suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          style={{
            position: 'absolute',
            top: '40px',
            left: '0',
            right: '0',
            zIndex: '1',
            backgroundColor: '#fff',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            border: '1px solid #ccc',
            borderRadius: '20px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                borderBottom: index < suggestions.length - 1 ? '1px solid #ccc' : 'none'
              }}
              onClick={() => handleSuggestionClick(suggestion)} 
            >
              <img
                src={suggestion.imageUrl}
                alt={suggestion.title}
                style={{ width: '30px', height: '30px', marginRight: '8px', borderRadius: '50%' }}
              />
              <span>{suggestion.title}</span>
            </div>
          ))}
        </div>
      )}
      {showNotFound && (
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '0',
            right: '0',
            zIndex: '1',
            backgroundColor: '#fff',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            border: '1px solid #ccc',
            borderRadius: '20px',
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Products Not Found
        </div>
      )}
    </div>
  );
}
