import { createContext ,useEffect,useState } from "react";
import SHOP_DATA from '../shop-data.js'
import { getCategoriesAndDocument } from "../utils/firebase_cofig.js";

export const ShopdataContext= createContext()

export const ShopDataprovider=({children})=>{
    const [shopData,Setshopdata]=useState({})

    useEffect(()=>{
        const getdata = async()=>{
            const categoriesMap = await getCategoriesAndDocument()
            console.log(categoriesMap)
            Setshopdata(categoriesMap)
        }

        getdata()
    },[])

    const value ={shopData,Setshopdata}
    console.log(shopData)
    return(
    <ShopdataContext.Provider value={value}>{children}</ShopdataContext.Provider>)
}