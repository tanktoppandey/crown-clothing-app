import { useEffect } from "react";
import { createContext ,useState} from "react";
import { AuthStatechangeListner } from "../utils/firebase_cofig";

export const Usercontext= createContext({CurrentUser:null,setuser:()=>null})

export const ContextProvider=({children})=>{
    const [CurrentUser,setuser]=useState(null)
    const value={CurrentUser,setuser}
    
    useEffect(
        AuthStatechangeListner((user)=>{
            console.log(user)
            if(user){
                setuser(user)
            }
        },[])
    )
    return(
        <Usercontext.Provider value={value}>
            {children}
        </Usercontext.Provider>
    )

}
