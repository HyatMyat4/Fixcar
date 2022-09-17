import Haderlogo from './imgFolder/3.jpg'
import { Link  } from 'react-router-dom'
import { useState } from 'react';
import {  Router , Routes , Route   } from 'react-router-dom';

function Header( {Caritem , setCaritem , FilterCar , setFilterCar , setcarfilter} ) {
const under0fuction = () => {
  const InputValue = 500000 ;        
       let  CarFilter =Caritem.filter ( Car => Car.price1  < InputValue);
       CarFilter.sort((a,b) => b.price1 - a.price1)
       setcarfilter(CarFilter)
  console.log("iy workk")
}
  const btid = true ;
  let Carfilter2 = [] ;
 
    const handleClick = (e) => {     
     const value =e.target.id 
     console.log(value)
      if(value === '19979') {
        const icon =document.getElementsByClassName('Dark-light')[0]; 
       const root =document.getElementsByClassName('body')[0];    
      root.style.backgroundColor="black"       
      icon.innerHTML = "" ;
      icon.innerHTML += ` <i class="fa-solid fa-moon icon-moon " id = '19972'></i>`
      console.log('i')
      }
      if(value === '19972') {
        const icon =document.getElementsByClassName('Dark-light')[0]; 
       const root =document.getElementsByClassName('body')[0];    
      root.style.backgroundColor="#333333"       
      icon.innerHTML = "" ;
      icon.innerHTML += `<i class="fa-regular fa-sun light " id='19979' ></i>`
      console.log('i')
      }
    }  
    
    
    const handlefilter = (e) => {
      const Resualt1 =document.getElementsByClassName('Resualt')[0];
      const root =document.getElementsByClassName("body")[0];
      let value1 =e.target.value.toLowerCase()          
      root.addEventListener("click", a => {
        Resualt1.innerHTML="" ;  
        e.target.value = "" ;
      })      
      Resualt1.innerHTML="" ;
      console.log(Caritem,"kkkkkkkkkk")
      
     if(value1.length > 0) {
     
      const Resualt =document.querySelector(".Resualt");
      Resualt.addEventListener('click', v => {
          const id = v.target.id.toString()
          console.log(id,"QLLLLL")
          Carfilter2 = Caritem.filter(car => car.id.toString().includes(id));
          setFilterCar(Carfilter2) 
          console.log(Carfilter2,'///')     
         
          Resualt.innerHTML="" ;  
          e.target.value = "" ;
         }
        
      )
     
  }
     if(value1.length === 0) {
      return
     }
      console.log(value1)
     const CarFilter =Caritem.filter(item => item.Carlogoname.toLowerCase().includes(value1) )
     
     for (let i = 0 ; i < CarFilter.length ; i++ ) {
    
      const caritemcontainer =document.createElement("div");
      caritemcontainer.id=CarFilter[i].id;
      caritemcontainer.classList.add("Resualt-container");            
      const CarName =document.createElement("div");
    CarName.classList.add("carName2");
    CarName.id=CarFilter[i].id;
      CarName.append(CarFilter[i].title);

      const carimg =document.createElement("img");
      carimg.classList.add("Resualt-img");
      carimg.id=CarFilter[i].id;
      carimg.src =CarFilter[i].image;
      
      caritemcontainer.append(CarName,carimg);
      Resualt1.append(caritemcontainer);

  }
     


    }
  console.log(Carfilter2,'///')
  
const xfuction = e => {
const SideBar =document.getElementsByClassName("SideBar")[0];
SideBar.style.display = "block"
const root =document.getElementsByClassName("body")[0];
root.style.overflow = "hidden"
}




const showFeed = e => {  

  let k = e.target.id ;
  let name =["p","all","filter-price","c","L"]
  for (let i = 0 ; i < name.length ; i++){
    const PopularSportCar =document.getElementsByClassName(name[i])[0];
    PopularSportCar.style.backgroundColor = ''
  }
  const PopularSportCar =document.getElementsByClassName(name[k])[0];
  PopularSportCar.style.backgroundColor = ''
PopularSportCar.style.backgroundColor = 'red'

}
    return (     
     
      <div className="Header">
  
        <div className="Header-Container">            
           <img className='Header-img' src={Haderlogo}/>
           <div className='Header-input'>                
               <i  className="fa-solid fa-magnifying-glass search-icon" ></i>
               <input className="Header-inpt-Top" type="email" placeholder= " Search Sport Car..." list="Email"
               onChange={handlefilter}
               />  
  
           </div>             
          
                <span id='0' className='Top-Page-Name p'><Link onClick={showFeed} id='0' to="/">PopularSportCar</Link></span>                              
                <span id='1' className='Top-Page-Name all'><Link onClick={showFeed} id='1'to="/All">All Type</Link></span>            
                <span id='2' onClick={under0fuction} className='Top-Page-Name filter-price'><Link onClick={showFeed} id='2' to="/FilterPrice">Filter Price</Link></span>
                <span id='3' className='Top-Page-Name c'><Link onClick={showFeed} id='3' to="/Contactus">Contact us</Link></span> 
                <span id='4' className='Top-Page-Name L' onClick={showFeed} >Log in</span>               

            
           
            <div className='Header-Container2'>
                    <div className='Dark-light' onClick={handleClick} >                   
                    <i className="fa-regular fa-sun light " id='19979' ></i>
                    </div>
            </div>
            <div className='line-3' onClick={xfuction}>
            <i className="fa-solid fa-bars line"></i>
            </div>
        </div>
      </div>
      
      
    );
 
  }
  
  export default Header;
 
 
 