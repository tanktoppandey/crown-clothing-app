import './cart-componet.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartState.context'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Checkout from '../checkout-component/Checkout'
const CartstickyComp=()=>{
  
    const {cartData}=useContext(CartContext)
    
    const Navigate = useNavigate()

    const onClickhandler=()=>{
        Navigate('/checkout')

    }

    

    console.log(cartData);
    return(
      
        <div className="Cart-sticky-container">
          <div className='Cart-item-container'>
          {
            cartData.map(
                    ({id,name,price,quantity})=>{
                      return(
                        <div className='CartItem' id={id}>
                            <h3>{name}</h3>
                            {quantity>1?<h3>{quantity} X {price}</h3>: <h3>{price}</h3>}
                        </div>
                 )
               }
            )
          }
         </div>
         <button onClick={onClickhandler}>CHECKOUT</button>
        </div>
       
        


    )
}
export default CartstickyComp