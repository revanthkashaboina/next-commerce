import React from 'react';
import Image from 'next/image';
import organicLarder from './organicLarder.png';

interface ObjItem {
    id: number;
    image: any;
    title: string;
}

const arrObj: ObjItem[] = [
    { id: 1, image: organicLarder, title: 'Organic Larder' },
    { id: 2, image: organicLarder, title: 'New Products' },
    { id: 3, image: organicLarder, title: 'Gluten Free' },
    { id: 4, image: organicLarder, title: 'Vegan' }
];


const AboutProductsCard: React.FC = () => {
    return (
        <div className="card-container">
            <div className="items">
                {arrObj.map((item: ObjItem, index: number) => (
                    <div className="item" key={item.id}>
                        <Image src={item.image} alt={item.title} className="item-image" />
                        <p className="item-title">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutProductsCard;


// 'use client'
// import React from 'react';

// interface ObjItem {
//     id: number;
//     image: string;
//     title: string;
// }

// const arrObj: ObjItem[] = [
//     { id: 1, image: "https://organicfoodsandcafe.com/_nuxt/img/organicLarder.b7076ee.svg", title: 'Organic Larder' },
//     { id: 2, image: "https://organicfoodsandcafe.com/_nuxt/img/organicLarder.b7076ee.svg", title: 'New Products' },
//     { id: 3, image: "https://organicfoodsandcafe.com/_nuxt/img/organicLarder.b7076ee.svg", title: 'Gluten Free' },
//     { id: 4, image: "https://organicfoodsandcafe.com/_nuxt/img/organicLarder.b7076ee.svg", title: 'Vegan' },
// ];

// const AboutProductsCard: React.FC = () => {
//     const [isLargeScreen, setIsLargeScreen] = React.useState(true);

//     React.useEffect(() => {
//         const handleResize = () => {
//             setIsLargeScreen(window.innerWidth >= 992);
//         };
//         window.addEventListener('resize', handleResize);
//         handleResize();
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <div className="card-container">
//             <div className="items">
//                 {isLargeScreen ? (
//                     <div className="large-screen-items">
//                         {arrObj.map((item: ObjItem, index: number) => (
//                             <div className="item" key={item.id}>
//                                 <img src={item.image} alt={item.title} className="item-image" />
//                                 <p className="item-title">{item.title}</p>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <div className="small-screen-items">
//                         {arrObj.slice(0, 3).map((item: ObjItem, index: number) => (
//                             <div className="item" key={item.id}>
//                                 <img src={item.image} alt={item.title} className="item-image" />
//                                 <p className="item-title">{item.title}</p>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AboutProductsCard;