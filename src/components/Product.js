import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Product = () => {
    return (
        <ul>
        <li>
          <Link to="/Product/Nike">
            Nike
          </Link>
        </li>
        <li>
          <Link to="/Product/Polo">
            Polo
          </Link>
        </li>
        <li>
          <Link to="/Product/Adidas">
            Adidas
          </Link>
        </li>
        <li>
          <Link to="/Product/Lee Cooper">
            Lee Cooper
          </Link>
        </li>
      </ul>
    )
}

export default Product