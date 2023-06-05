import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();

  let isValid = true;

  if (isNaN(parseInt(id))) {
    isValid = false;
  }

  return (
    <div>
      {isValid ? (
        <h1 className="text-4xl text-center">Product : {id}</h1>
      ) : (
        <h1 className="text-4xl text-center">No product found</h1>
      )}
    </div>
  );
};

export default Product;
