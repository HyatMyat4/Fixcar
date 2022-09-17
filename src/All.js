import AllShow from './AllShow'
import { useState , useEffect} from 'react'
function All({ Caritem , FilterCar })  {
      const SearchInfo =document.getElementsByClassName("SearchInfo")[0];  

    const [ Item , setItem ] = useState([])
const [ gohref , setgohref ] = useState('')
    const handleGO =(e) => {
        setgohref(e.target.value)      
        console.log(setgohref)
           
    }
  
    const searchlink = "https://www.youtube.com/results?search_query="
  
    let  href =searchlink+gohref
    const haldlegoPage = a => {         
       SearchInfo.value = "";     
   
       }
       if(gohref.length > 0){
        console.log("it working")
        SearchInfo.addEventListener("keyup",(e) =>{
         if(e.key === 'Enter'){
            window.location = searchlink+gohref
         }
      
           })
    }  
return(
<div className="All">
<div className="SearchinfoHeader">
        <div className="SeachInfo-input">
          
        <input
        id="SearchInfo"
        type={"email"}
        placeholder="Search Car Info..." 
        className='SearchInfo'
        onChange={handleGO} 
        
        />
       
        <a href={gohref.length > 0 ? href : "/SearchCarinfo"}> 
        <i className="fa-solid fa-magnifying-glass s-icon" onClick={haldlegoPage}></i>
        </a> 
        </div>
    </div>
{Caritem.map((item) => (
      <AllShow 
      key={item.id}
      title ={item.title}
      price ={item.price}
      Type={item.Type}
      Engin={item.Engin}
      Torque={item.Torque}
      Horsepower={item.Horsepower}
      Acceleration={item.Acceleration}  
      Transmission={item.Transmission}
      TopSpeed={item.TopSpeed}
      Special={item.Special}
      person={item.person}
      image={item.image}
      href={item.href}
      CarLogo={item.CarLogo}
      Madein={item.Madein}
      
      />  
  
 ))}
</div>
);
}

export default All ;