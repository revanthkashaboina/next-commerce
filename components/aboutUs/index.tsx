import Image from 'next/image';
import React from 'react';
import ImageLogo from '../icons/cwsuite-logo.webp';

const AboutUsCard: React.FC = () => {
  return (
    <div
      className="responsive-card"
      style={{
        maxWidth: '83%',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        marginTop:"1%",
        marginBottom:"1%"
      }}
    >
      <div className="logo" style={{ marginBottom: '20px' }}>
        <Image src={ImageLogo} alt="About Us Image" width={400} height={250} />
      </div>
      <div className="content">
        <h1 style={{ fontSize: '1.5em', fontFamily:"Arial", fontWeight:"bold", color:"gray" }}>CW Suite</h1>
        <p style={{ fontSize: '1em', fontFamily:"Arial",color:"gray" }}>
          Organic Foods and Café UAE is a family run company founded in 2005 that runs organic supermarkets and cafés selling fresh
          organic and biodynamic foods, groceries, supplements, meat, dairy products, breads and household cleaning products.
        </p>
      </div>
    </div>
  );
};

export default AboutUsCard;
