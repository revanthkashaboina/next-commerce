import { getCart } from 'lib/shopify';
import { cookies } from 'next/headers';
import CartModal from './modal';

export default async function Cart() {
  const cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  return <CartModal cart={cart} />;
  // return (
  //   <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", boxSizing: 'inherit' }}>
  //     <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", boxSizing: 'inherit', width: "100%" }}>
  //       <div style={{ display: "flex", alignItems: "center", backgroundColor: "#fff", height: "40px", width: "40px", borderRadius: "50%", padding: "10px", cursor: "pointer" }}>
  //         {/* Your cart icon */}
  //         {/* Replace this with your actual cart icon */}
  //         <CartModal cart={cart} />
  //       </div>
  //       {/* Label for the cart */}
  //       <p style={{ fontSize: "12px", color: "#fff", margin: "0px", boxSizing: 'inherit', cursor: "pointer" }}>cart</p>
  //     </div>
  //   </div>
  // );
}
