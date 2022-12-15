import React from 'react'
import './Checkout.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartState.context'
import { useState } from 'react'

function Checkout() {
   const {cartData,AdditemstoCart ,removItemFromcart,RemoveItem,total}= useContext(CartContext)
   
  


  
     return (
    <div className='CheckoutContainer'>
        <div className='Cartitemcheckout'>
        <div className='checkoutlist'>
            <div>   <p>Product</p>    </div>
            <div>   <p>Discription</p>    </div>
            <div>   <p>Quantity</p>    </div>
            <div>   <p>Price</p>    </div>
            <div>   <p>Remove</p>    </div>
           
            
        </div>
        {
            cartData.map((item)=>{
                return(  

                    <div key={item.id} className='checkout-item'>
                        

                        <div className='item-image'>
                        <img src={item.imageUrl}></img>
                        </div>
                        <div className='item-discription'>
                        <p >{item.name}</p>
                        </div>
                        
                        
                        <div className='qauntityControl'>
                       
                        <span  onClick={()=>removItemFromcart(item)}>&#10094;</span>
                        <div className='item-price'>  
                        <p>{item.quantity}</p>
                        </div>
                        <span  onClick={()=>AdditemstoCart(item)} >&#10095;</span>

                        
                        </div>
                        <div>
                        <p>{item.price}</p>
                        </div>
                        <div className='item-remove'>
                        <span onClick={()=>RemoveItem(item)}>&#10005;</span>
                        </div>
                        
                         
                    </div>
                    
                )
                
            })
            
        }
        <div>
                <h3>Total  : ${total}</h3>
                </div>
         </div>
    </div>
  )
}

export default Checkout
