import React, { useEffect, useState } from 'react';
import Button from './Button';
import { AiOutlineHeart } from 'react-icons/ai';
import StarRating from "./StarRating";

const ProductListing = () => {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className="container mx-auto mt-4 p-10  max-w-[1200px]">
      <h1 className="text-3xl font-bold mb-4">Products For You!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md flex flex-col justify-between p-4 rounded-lg font-semibold">
            <div className='flex items-end justify-end'>
              <AiOutlineHeart className='text-right' />
            </div>
            <div>
              <img src={product.image} alt={product.title} className="mx-auto h-[200px] object-cover mb-4 rounded-md" />
            </div>
            <h2 className="text-base font-bold">{product.title}</h2>
            <div className='flex gap-2'>
              <StarRating rating={3} /><p>(200)</p>
            </div>            <p className="text-gray-600">${product.price}</p>
            <Button variant="secondary">Add to cart</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductListing