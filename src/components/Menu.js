import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Category">
            Category
          </Link>
        </li>
        <li>
          <Link to="/Product">
            Product
          </Link>
        </li>
        <li>
          <Link to="/Admin">
            Admin
          </Link>
        </li>
      </ul>
    )
}

export default Menu
