import React from 'react';
import { Link } from 'react-router-dom';
// to install packages in the terminal type-> npm add phosphor-react
import {ShoppingCart} from 'phosphor-react';
import "./navbar.css";


export const Navbar = () => {
  return (
    <div className= "navbar">
        <div className = "links">
            <Link to= "/"> Shop </Link>
            <Link to="/contact"> Contact </Link>
            <Link to= "/cart">
                <ShoppingCart size={30}/>  
            </Link>   
        </div>
    </div>
  );
};

