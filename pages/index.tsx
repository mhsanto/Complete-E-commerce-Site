import { Inter } from "@next/font/google";
import { Product, Footer, HeroBanner } from "../components";
import { client } from "../lib/client";



import React from 'react'

const Home = ({products,bannerData}) => {
  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    {console.log(bannerData)}
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>Speaker of many variants</p>
    </div>
    <div className="products-container">
      {products?.map((product) => (<Product key={product._id} product={product} />))}
    </div>
    <Footer footerBanner={bannerData && bannerData[0]}/>
  </>
  )
  
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const BannerQuery = '*[_type == "banner"]';
  const bannerData= await client.fetch(BannerQuery);
  return{
    props:{products,bannerData}
  }
};
export default Home
