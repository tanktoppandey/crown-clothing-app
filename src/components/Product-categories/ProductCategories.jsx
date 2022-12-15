import React from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartState.context'
import { ShopdataContext } from '../../context/shopdata.context'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const ProductCategories = () => {
    
  const {AdditemstoCart} =useContext(CartContext)
  const {category}=useParams()
  const {shopData} =useContext(ShopdataContext)
  const [Product,setproduct]= useState(shopData[category])

  useEffect(()=>{
    setproduct(shopData[category])
  },[category,shopData])
  



  console.log(Product)
  return (
    <div>
    {
     Product
     
       &&
     
       <>
       
       <h1>{category}</h1>
       
       <div className='AllcardsContainer'>
       
        {
              Product.map(((item)=>{
                const  {id,name,price,imageUrl} = item
                  
              return ( 
                  <div key={id} className='ProductMaincontainer'>
                   <div  className="ShopCardcontainer">
                      
                      <img src={imageUrl} alt={name}></img>
                      <button onClick={()=>AdditemstoCart(item)}> ADD TO CART</button>    
                  </div>
                   <div className='info'>
                   <p> {name}</p>
                   <p> $:{price}</p>
                   </div>
                   </div>
              )
              })
              )
        }
        </div>

       </>
        
    
  }
    
    </div>
  )
}

export default ProductCategories
