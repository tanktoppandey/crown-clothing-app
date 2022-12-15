import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const Additems =(cartData,item)=>{
       
    const existingItem = cartData.find((cartData)=>cartData.id===item.id)

    if(existingItem){
      return  cartData.map(
            (cartData)=>cartData.id===item.id? {
              ...cartData ,quantity: cartData.quantity+1
            }: cartData
        )
    }

    return[...cartData,{...item,quantity:1}]
      
}


const removeItem =(cartData,item)=>{
    const existingItem = cartData.find((cartData)=>cartData.id===item.id)

    if(existingItem.quantity===1){
      return  cartData.filter((cartData)=>cartData.id !== item.id)
    }

    return  cartData.map(
        (cartData)=>cartData.id===item.id? {
          ...cartData ,quantity: cartData.quantity-1
        }: cartData
    )

}

const removeitemfromcart = (cartData,item)=>{
         
    return  cartData.filter((cartData)=>cartData.id !== item.id)
}

const setTotalCalc=(cartData)=>{
    let total = 0
    cartData.map((cartData)=>
        total= total+(cartData.quantity*cartData.price))
        return(total)
}


export const CartContext= createContext({CartData:[],setCartData:()=>null,AdditemstoCart:()=>{}})



export const CartContextProvider=({children})=>{
     
    const [cartData,setCartData]= useState([])
    const [total ,settotal]= useState(0)

   
    

    const RemoveItem= (item)=>{
        setCartData(removeitemfromcart(cartData,item))
    }
    

    useEffect(()=>{
        const newCarttotal = cartData.reduce((total,cartData)=>total+cartData.quantity*cartData.price,0)
        settotal(newCarttotal)
    },[cartData])
   

   

    const AdditemstoCart=(item)=>{
         setCartData(Additems(cartData,item))
    }

    const removItemFromcart=(item)=>{
        setCartData(removeItem(cartData,item))
    }
    
    const value={cartData,AdditemstoCart ,removItemFromcart,RemoveItem,total}


    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )


}