import { useState } from 'react'
function FilterPrice({Caritem , Carfilter , setcarfilter})  {  
  
    const handlefilter = e => {
       e.preventDefault()
      
      let InputValue =e.target.value;    
            
      
     
        
      if(InputValue  > 20000 ) {         
      let  CarFilter =Caritem.filter ( Car => Car.price1  < InputValue);
      CarFilter.sort((a,b) => b.price1 - a.price1)
      console.log(CarFilter,"beforeset")
      setcarfilter(CarFilter)
     
      
      console.log(Carfilter,"afterset")
    }      
       
      

     
     
    }
    const under0fuction = e => {
     e.target.value = ""
      console.log("it not work")
     
     }
  
      
     
  
   
  
     
    return(      
    <div  className="FilterPrice">   
    <div className="Filter-input">
    <i className="fa-solid fa-filter filter-icon"></i>
        <input 
        id="Filter"
        type={"Email"}
        placeholder="Eg.500000"
        onChange={handlefilter}
        onClick={under0fuction}
        />       
    </div>
    {Carfilter.map((item) => (       
     <div key={item.id} className="PopularSportCar">
     <div className="Popular-Container">
         <div className="Popula-left">
             <h1 className='Car-Name-Header'>{item.title}</h1>                            
             <span className='h2-header'>Technical Specifications</span>               
                 <div><span className='Question'>Type = <span className='Answer'> {item.Type}</span></span></div>
                 <div><span className='Question'>Engine Name = <span className='Answer'>{item.Engin}</span></span></div>
                 <div><span className='Question'>Torque  = <span className='Answer'>{item.Torque}</span></span></div>
                 <div><span className='Question'>Horsepower = <span className='Answer'>{item.Horsepower}</span></span></div>
                 <div><span className='Question'>Acceleration = <span className='Answer'>{item.Acceleration}</span></span></div>
                 <div><span className='Question'>Transmission = <span className='Answer'>{item.Transmission}</span></span></div>
                 <div><span className='Question'>Top Speed = <span className='Answer'>{item.TopSpeed}</span></span></div>
                 <div><span className='Question'>Special = <span className='Answer'>{item.Special}</span></span></div>
                 <div><span className='Question'>Seats = <span className='Answer'>{item.person}</span></span></div> 
                 <div><span className='Question'>Made In = <span className='Answer'>{item.Madein}</span></span></div> 
                 <span className='only-This-info'>You Can Click Photo For This Car info Video</span>                    
                 <span className='Question-Price'>Price Starting at = <span className='Answer-Price'>{item.price}</span></span>
                 <div className="react-container" >
        <i className="fa-solid fa-heart love-heart "></i><span className="count-Love">1328</span> 
         <i className="fa-solid fa-star Star "></i><span className="count-star">1328</span>             
         </div>                  
         </div>
         <div className="Popula-Right">  
         <div className="car-logo-container">
            <img className='car-logo' src={item.CarLogo} /> 
            </div>                                              
             <a href={item.href}>

               <div className="car-img-container">
               <img className='car-img' src={item.image} />     
               </div>                                    
            </a>                                                                       
         </div>
     </div>
             
   </div>
      
       
  
 ))} 
    </div> 
    
    );    
    }
    
    export default FilterPrice ;