import { Link  } from 'react-router-dom'
import SideBarHeader from "./SideBarHeader"
function SideBar({ Caritem ,setcarfilter})  {
    const under0fuction = () => {
      const xfuction = e => {
        const SideBar =document.getElementsByClassName("SideBar")[0];
        SideBar.style.display = "none"
        const root =document.getElementsByClassName("body")[0];
        root.style.overflow = ""
        }
        const InputValue = 500000 ;        
             let  CarFilter =Caritem.filter ( Car => Car.price1  < InputValue);
             CarFilter.sort((a,b) => b.price1 - a.price1)
             setcarfilter(CarFilter)
        console.log("iy workk")
      }
    const linkStyle = {
        textDecoration: "none" ,       
        width: '100%',
        fontSize: '15px',
        color: 'white',
        
      };
      const xfuction = e => {
        const SideBar =document.getElementsByClassName("SideBar")[0];
        SideBar.style.display = "none"
        const root =document.getElementsByClassName("body")[0];
        root.style.overflow = ""
        }
    return(
    <div className="SideBar">
       <i onClick={xfuction} className="fa-solid fa-x X-icon"></i>
     <SideBarHeader/>   
    <div className="SideBar-body">
        <Link to="/" style={linkStyle} onClick={xfuction}>
        <div className="Popular-side" id="1">
        <span className="ppsc">PopularSportCar</span>
        <i className="fa-solid fa-chevron-right angle"></i>
        </div>
        </Link>
        <Link to="/All" style={linkStyle} onClick={xfuction} >
        <div className="Popular-side" id="2" >
        <span className="ppsc">All</span>
        <i className="fa-solid fa-chevron-right angle"></i>
        </div>
        </Link>
        <Link to="/FilterPrice" style={linkStyle} onClick={under0fuction}  >
        <div className="Popular-side" id="3" onClick={xfuction}>
        <span className="ppsc">Filter Price</span>
        <i className="fa-solid fa-chevron-right angle"></i>
        </div>
        </Link>      
        <Link to="/Contactus" style={linkStyle} onClick={xfuction} >
        <div className="Popular-side" id="5">
        <span className="ppsc">Contact us</span>
        <i className="fa-solid fa-chevron-right angle"></i>
        </div>
        </Link>
    </div>
    </div>
    );
    }
    
    export default SideBar ;