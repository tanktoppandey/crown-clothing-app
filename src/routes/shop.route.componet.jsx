import { ShopdataContext } from '../context/shopdata.context'
import { useContext,useState,useEffect } from 'react'
import ShopCard from '../components/shop-data-component/shop-card'
import { Route, Routes } from 'react-router-dom'
import ProductCategories from '../components/Product-categories/ProductCategories'




const Shop=()=>{
   
    const{shopData}=useContext(ShopdataContext)
   


    return(
      <Routes>
         <Route index element={ <ShopCard Data={shopData} />}/>
         <Route path=":category" element={<ProductCategories/>}/>
      </Routes>
        
         )
}


export default Shop