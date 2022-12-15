import './navcomponent.css'
import { Usercontext } from '../../context/createcontext'
import { Link, Outlet } from 'react-router-dom'
import { Fragment } from 'react'
import {auth, SignInGoogle ,SigninwithGoogleRedirect} from '../../utils/firebase_cofig'
import CartstickyComp from '../cart-component/cart-component'

import { useEffect } from 'react'

import { useState } from 'react'
import { useContext } from 'react'
import { SignOutUser } from '../../utils/firebase_cofig'
import CartLogofrom  from '../shopping-bag.svg'
import {  CartContext} from "../../context/CartState.context";

 let updateUserState

const GoolesignIn= async()=>{
    await SignInGoogle();
}

const signout=()=>{
    SignOutUser()
    const date= new Date
    updateUserState(date)

}


const Navcomponent=()=>{

    const {cartData} =useContext(CartContext)
    console.log(cartData.length)
 
    const [CartpopUp,setCartpopUP]=useState(false)
    const {CurrentUser}= useContext(Usercontext)

    const CartItemNum=()=>(
        cartData.length
    )

    const popUP=()=>{
          setCartpopUP(!CartpopUp)
    }
    return <Fragment>
        <div className='navbar-class'>
        <div className='Nav-links'>
            <ul>
                <Link to={{pathname:'/'}}>Home</Link>
                <a href="#">Catagories</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <Link to={{pathname:"/Shop"}}>Shop</Link>
            </ul>
        </div>
        <div className='Nav-login'>
            { CurrentUser==null? <button onClick={GoolesignIn}>Login</button>:
            <button onClick={signout}>Signout</button>}
            <div className='CartAndButton' onClick={popUP}>
            <img src={CartLogofrom} alt='cart logo'></img>
                    <span>{cartData.length}</span>
            </div>

        </div>
       
        
        </div>
        <div>
        {
           CartpopUp?<CartstickyComp />:null        
        }
        </div>
        
        <Outlet />
        
    </Fragment>
   
}

export default Navcomponent