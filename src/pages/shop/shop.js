import React from 'react';
import {PRODUCTS} from "../../products";
import {Product} from './product';
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1> Beauty Success </h1>
      </div>
      <div className="products"> 
      {PRODUCTS.map((product) => (
      <Product data={product} />))} 
     </div>
    </div>
  );
};
/*The code you provided renders a list of products using a React component. Let's go through it step by step:

1. `<div className="products">`
   This line creates a `div` element with a class name "products". It serves as a container for the list of products that will be rendered.
2. `{""}`
   This line contains an empty string (`""`). As mentioned before, it doesn't have any practical effect and likely exists for formatting purposes or as a placeholder for future content.

3. `{PRODUCTS.map((product) => (<Product data={product} />))}`
   This part of the code maps over the `PRODUCTS` array and renders a `Product` component for each product in the array.
   
   - `PRODUCTS`: It is an array containing product objects, with each object representing a product and containing relevant data such as name, price, description, etc. 

   - `.map((product) => (<Product data={product} />))`: This part uses the `map` function to iterate over the `PRODUCTS` array. For each product in the array, it renders a `Product` component and passes the product data as a prop. The product data is passed to the `Product` component using the prop named `data`.

   Note: The `Product` component is expected to be defined . It receives the product data as a prop, and within the `Product` component, you can access the product data through `props.data`. This allows the `Product` component to render the details of each product (e.g., name, price, description) based on the passed data.

Overall, this code segment efficiently renders a list of products using the `Product` component, leveraging the `PRODUCTS` array as a data source.*/