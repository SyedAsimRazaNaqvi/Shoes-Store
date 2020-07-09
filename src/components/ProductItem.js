import React from 'react'
import Shoes from '../shoes.json'
import { useParams } from 'react-router-dom'

const ProductItem = () => {
    const {id} = useParams();
    const shoe = Shoes[id]

    if (!shoe) {
        return <h3 className="title">Product Not Found</h3>
    }

    return (
        <div>
            <h2 className="title">Product Item</h2>
            <hr/>
            <div className="link">
                <h3 >{shoe.name}</h3>
                <img  src={shoe.img} alt="shoe" height={400} width={400} />
                <h4 >{shoe.price}</h4>
            </div>
        </div>
    )
}

export default ProductItem
