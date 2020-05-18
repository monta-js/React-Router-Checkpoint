import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <p>You must log in to view the page at /adminLog in</p>
            <Link to="/Admin/AdminWlc">
            <button>Log in</button>
          </Link>
            
        </div>
    )
}

export default Admin
