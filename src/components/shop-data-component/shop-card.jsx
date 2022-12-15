import { useContext } from 'react'
import { CartContext } from '../../context/CartState.context'
import './shop-data.css'
import { Link } from 'react-router-dom'



const ShopCard= (props)=>{
    const {cartData,AdditemstoCart} =useContext(CartContext)
    
    const {Data } = props
    //()=> setCartData((cartData)=>[...cartData,{id:id,name:name,price:price}])
    
    
    
    return(
       <div>
        {
         Object.keys(Data).map(title=>(
           <>
           
           <Link to={{pathname:`/shop/${title}`}}>{title}</Link>           
           <div className='AllcardsContainer'>
           
            {
                  Data[title].filter((_,idx)=>idx<4).map(((item)=>{
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
            
        ))
      }
        
        </div>

    )

}

export default ShopCard