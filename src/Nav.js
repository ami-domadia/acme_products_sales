import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ({location, productcount, salecount}) => {
    const pathname = location.pathname
    return (
        <ul className='nav nav-tabs'>
            <li key='Home' className={`nav-link ${pathname==='/'? 'active':''}`}>
                <Link to='/'>Home</Link>
            </li>            
            <li key='products'> 
                <Link to='/products' className={`nav-link ${pathname==='/products'? 'active':''}`}>Products {productcount}</Link>
            </li>
            <li key='sales'> 
                <Link to='/products/sales' className={`nav-link ${pathname==='/products/sales'? 'active':''}`}>Sales {salecount}</Link>
            </li>
            <li key='create'> 
                <Link to='/products/create' className={`nav-link ${pathname==='/products/create'? 'active':''}`}>Create</Link>
            </li>
        </ul>
    )
}

export default Nav