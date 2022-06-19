  import React from 'react'

  import { client } from '../lib/client'

  import { Product, FooterBanner, HeroBanner } from '../components/'

  const Home = ({ productsData, bannerData }) => {
    return (
      <>
        <HeroBanner heroBanner={bannerData.length ? bannerData[0] : null}/>

       { console.log(bannerData)}

        <div className='products-heading'>
          <h2>Best Selling Products </h2>

          <p>Speakers of many variations </p>
        </div>

        <div className='products-container'>
          {
            productsData
            ?.map(
              product => (
                <Product key={product._id} product={product}/>
              )
            )
          }
        </div>

        <FooterBanner/>
      </>
    )
  }

  export default Home; 


  export const getServerSideProps = async() => {
    const productQuery = '*[_type == "product"]'; 
    const productsData =  await client.fetch(productQuery); 

    const bannerQuery = '*[_type == "banner"]'; 
    const bannerData =  await client.fetch(bannerQuery); 


    return {
      props: {
        productsData, bannerData
      }
    }


  }