import React from 'react'
import Shoes from '../shoes.json'
import { Link } from 'react-router-dom'

function Product() {
    return (
        <div>
            <h2 className="title">Products</h2>
            <div className="Products">
                {Object.keys(Shoes).map(KeyName => {
                    const shoe = Shoes[KeyName];
                    return (
                        <Link key={KeyName}
                            to={`/product/${KeyName}`}
                            className="eachItem">
                                <div className="eachItem">
                            <h4 className="align">{shoe.name}</h4>
                            <img src={shoe.img} height={150} alt="shoe" height="300px" />
                            <h4 className="align" >{shoe.price}</h4>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Product