import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const Category = () => {
    return (
        <div>
        <ul>
        <li>
          <Link to="/Category/Shoes">
            Shoes
          </Link>
        </li>
        <li>
          <Link to="/Category/Boots">
            Boots
          </Link>
        </li>
        <li>
          <Link to="/Category/Footwear">
             Footwear
          </Link>
        </li>
            </ul>
        </div>
    )
}

export default Category