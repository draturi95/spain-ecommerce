import React from 'react'

const Home = () => {
  return (
    <>
      Hero Banner 

      <div className='products-heading'>
         <h2>Best Selling Products </h2>

         <p>Speakers of many variations </p>
      </div>

      <div className='products-container'>
        {
          ["Produc1", "Product2"]
          .map(
            product => product
          )
        }
      </div>
    </>
  )
}

export default Home