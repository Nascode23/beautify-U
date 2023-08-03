import React, {useContext} from 'react';
import { ShopContext } from "../../context/shop-context";


export const Product = (props) => {
  const { id,productName, price, productImage}= props.data;
  const { addToCart, cartItems } = useContext(ShopContext);


  const cartItemAmount=cartItems[id];
 
  return (
    <div className="product">
      <img src={productImage} alt=""/>
      <div className='description'>
        <p>
           <b>{productName}</b> 
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
         Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
      </button>
    </div>
  );  
};
/*rendering a button with an "Add To Cart" label. Let's break down the code

1. `<button className="addToCartBttn"  onClick={() => addToCart(id)}>`

   This line creates a button element with a class name "addToCartBttn". The `onClick` attribute is assigned a function that will be executed when the button is clicked. The function being called here is `addToCart(id)`, passing the `id` variable as an argument.

2. `Add To Cart {cartItemCount > 0 && <> ({cartItemCount}) </>}`

   This part of the code represents the label inside the button. It displays "Add To Cart" followed by the number of items in the cart in parentheses. The `cartItemCount` is a variable used to keep track of the number of items in the cart. The curly braces `{}` are used to embed JavaScript expressions inside JSX.

   - `{cartItemCount > 0}`: This is a conditional check to determine whether the cart has items (i.e., the count is greater than zero).
   - `&&`: The logical AND operator is used here. It acts as a short-circuit. If the expression before it is true, it proceeds with the evaluation of the expression after it.
   - `<>...</>`: This is a React fragment, used to group multiple elements without adding an extra wrapping element. It's essentially an empty tag. Inside the fragment, `({cartItemCount})` displays the number of items in the cart.

So, when the button is rendered, it will display "Add To Cart" initially. If there are items in the cart (i.e., `cartItemCount` is greater than zero), it will also display the count of items in parentheses next to the label. Clicking the button will execute the `addToCart` function, passing the `id` variable as an argument.*/