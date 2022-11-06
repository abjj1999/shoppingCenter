import React from "react";
import {
  HeroBanner,
  Product,
  Footer,
  Cart,
  Layout,
  FooterBanner,
  Navbar,
} from "../components";

import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Footballs || Basketballs || ... MORE</p>
      </div>
      <div className="products-container">
        {products?.map((p) => (
          <Product key={p._id} product={p} />
        ))}
      </div>

      {/* footer */}
      <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
