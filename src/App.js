
import './App.css';
import Home from './routes/home.component';
import { Routes ,Route} from "react-router-dom"
import Navcomponent from './components/navcomponent/navcomponent';
import { ContextProvider } from './context/createcontext';
import Shop from './routes/shop.route.componet';
import { ShopDataprovider } from './context/shopdata.context';
import { CartContextProvider } from './context/CartState.context';
import Checkout from './components/checkout-component/Checkout';



function App() {
 return(
  <ContextProvider>
    <ShopDataprovider>
      <CartContextProvider>
                    
                  <Routes>
                    <Route path='/' element={<Navcomponent />}>
                          <Route index element={<Home />}>
                          </Route>
                          <Route path='shop/*' element={<Shop />}>
                            
                          </Route>
                          <Route path='checkout' element={<Checkout />}></Route>
                    </Route>
                  
                  </Routes>
      </CartContextProvider>
    </ShopDataprovider>
  </ContextProvider>
  )

}


export default App;
