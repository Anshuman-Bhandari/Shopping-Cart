import React, { useState } from 'react'
import '../styles/cart.css'

const Cart = ({cart, setCart, Tprice}) => {

    const [price, setPrice] = useState(Tprice)

    const handleRemove = (ele) => {
        setPrice(price - ele.price)
        const arr = cart.filter((item) => item.id !== ele.id)
        setCart(arr)
    }

  return (
    <div className='cart_main'>
        <div className='total_price'>
            <h3> Total : {price} </h3>
        </div>
        <div className='cart_item'>
            {
                cart?.map((item) => {
                    return <div className='cart_box' key={item.id}>
                        <div className='cart_img'>
                            <img src={item.img}></img>
                            <p> {item.title} </p>
                            <p> {item.price} </p>
                        </div>
                        <div>
                            <button onClick={() => handleRemove(item)} >Remove Item</button>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Cart