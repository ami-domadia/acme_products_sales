import React from 'react'

function getSalePrice(price, discount){
    if(!discount){
        return null
    }
    else{
        return ((100-discount)*price/100).toFixed(2)
    }
}

export default function Products(products){
    console.log(products)
    
    return (
        <ul className="list-group">
            {products.map(product=>{
                const sale = getSalePrice(product.price, product.discount);
                const bool = sale? true: false;
                console.log('bool', bool)
                return(
                    <li className="list-group-item" key={product.id}>
                        <div>
                        {product.name} <br/>
                        {console.log(sale)}
                        ${product.price}<br/>
                        {`${sale? `$${sale}`:''}`}<br/>
                        {/* <strike style="backgroundColor=blue">{product.price}</strike><br /> */}
                        {/* <span display={sale? "inline": "none"}>${sale}</span><br/> */}
                        {/* <span style="visibility: hidden">${sale}</span><br/> */}
                        {product.availability} <br/>
                        <button className="btn btn-danger btn-sm">DELETE</button> <br/>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}