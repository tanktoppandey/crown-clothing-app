import CatagoriesComponent from "../components/catagories_comp/catogories_comp"
import Navcomponent from "../components/navcomponent/navcomponent"
import { Outlet } from "react-router-dom";

import { NavLink } from "react-router-dom";
const Home=()=>{

    return(
     <div>

       
       <CatagoriesComponent />  
       <Outlet />   
       
    </div>
    );

}

export default Home

