// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import LoyaltyImage from './loyalty img.jpg';

// interface ObjItem {
//   id: number;
//   image: any;
//   title: string;
// }

// const arrObj: ObjItem[] = [
//   { id: 1, image: LoyaltyImage, title: 'Loyalty Program' },
//   { id: 2, image: LoyaltyImage, title: 'Ready to Eat' },
//   { id: 3, image: LoyaltyImage, title: 'Fruit and Vegetables' },
//   { id: 4, image: LoyaltyImage, title: 'Diary, Eggs & Chilled' },
// ];

// const ShopByCategory: React.FC = () => {
//   return (
//     <div style={{
//       maxWidth: '85%',
//       margin: '0 auto',
//       padding: '20px',
//       borderRadius: '10px',
//       marginTop:"1%",
//       marginBottom:"1%"
//     }}>
//       <div style={{ boxSizing: "inherit" }}>
//         <div style={{ boxSizing: "inherit" }}>
//           <h2 style={{ fontFamily: "Arial", fontSize: "25px", color: "gray", margin: "10px 0 20px", boxSizing: "inherit", marginBlockStart: "0.83em", marginBlockEnd: "0.83em", marginInlineStart: "0px", marginInlineEnd: "0px", fontWeight: "bold" }}>SHOP BY CATEGORY</h2>
//         </div>
//         <div style={{ display: "grid", alignItems: "center", gridGap: "15px", gridTemplateColumns: "repeat(7,1fr)", boxSizing: "inherit" }}>
//           {arrObj.map((item: ObjItem) => (
//             <Link href="#" key={item.id} style={{ padding: "10px", backgroundColor: "#fff", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", cursor: "pointer", height: "100%", color: "#000", border: "1px solid #e8e8e8", borderRadius: "10px", textDecoration: "none", fontSize: "14px", boxSizing: "inherit" }}>
//               <p style={{ textAlign: "center", cursor: "pointer", color: "#000", fontFamily: "sans-serif", paddingBottom:"15px" }}>{item.title}</p>
//               <Image src={item.image} alt={`${item.title}-image`} style={{ backgroundRepeat: "no-repeat", paddingBottom:"15px", backgroundSize: "contain", backgroundPosition: "center", height:"120px",width:"125px", boxSizing: "inherit", textAlign: "center", cursor: "pointer", color: "#000", fontSize: "14px" }} />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopByCategory;



import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoyaltyImage from './loyalty img.jpg';

interface ObjItem {
  id: number;
  image: any;
  title: string;
}

const arrObj: ObjItem[] = [
  { id: 1, image: LoyaltyImage, title: 'Loyalty Program' },
  { id: 2, image: LoyaltyImage, title: 'Ready to Eat' },
  { id: 3, image: LoyaltyImage, title: 'Fruit and Vegetables' },
  { id: 4, image: LoyaltyImage, title: 'Diary, Eggs & Chilled' },
];

const ShopByCategory: React.FC = () => {
  return (
    <div style={{
      maxWidth: '85%',
      margin: '0 auto',
      padding: '20px',
      borderRadius: '10px',
      marginTop:"1%",
      marginBottom:"1%"
    }}>
      <div>
        <h2 style={{ fontFamily: "Arial", fontSize: "25px", color: "gray", margin: "10px 0 20px", fontWeight: "bold" }}>SHOP BY CATEGORY</h2>
        <div style={{ display: "grid", gridGap: "15px", gridTemplateColumns: "repeat(auto-fill, minmax(125px, 1fr))" }}>
          {arrObj.map((item: ObjItem) => (
            <Link href="#" key={item.id} style={{ padding: "10px", backgroundColor: "#fff", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", cursor: "pointer", color: "#000", border: "1px solid #e8e8e8", borderRadius: "10px", textDecoration: "none", fontSize: "14px" }}>
              <p style={{ textAlign: "center", cursor: "pointer", color: "#000", fontFamily: "sans-serif", paddingBottom:"15px" }}>{item.title}</p>
              <div style={{ position: "relative", width: "100%", paddingBottom: "100%", overflow: "hidden", borderRadius: "50%" }}>
                <Image src={item.image} alt={`${item.title}-image`} layout="fill" objectFit="contain" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
