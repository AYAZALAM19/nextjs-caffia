import React from 'react'

function CoffeeCard() {
  return (
    <div className='bg-white md:w-96 w-80 lg:w-96'>
        <div>
            <img src="/assets/images/about_product/packeg_of_product.jpg" className='lg:w-96' alt="hello" />
        </div>
        <div className='text-center'>
            <h3>Hello</h3>
            <p>This coffee is very refreshing and Energatic</p>
        </div>
        <div className='flex'>
            <p>300</p>
            <a href=""> buttoon</a>
        </div>
    </div>
  )
}

export default CoffeeCard