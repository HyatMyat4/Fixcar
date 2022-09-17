function AllShow({ 
    title , price , Type , Engin , Torque , Horsepower , Acceleration ,Transmission , TopSpeed ,Special , person , image , href , CarLogo , Madein  
  }) {
  
  
      return (      
        
        <div className="PopularSportCar">
          <div className="Popular-Container">
              <div className="Popula-left">
                  <h1 className='Car-Name-Header'>{title}</h1>                            
                  <span className='h2-header'>Technical Specifications</span>               
                      <div><span className='Question'>Type = <span className='Answer'> {Type}</span></span></div>
                      <div><span className='Question'>Engine Name = <span className='Answer'>{Engin}</span></span></div>
                      <div><span className='Question'>Torque  = <span className='Answer'>{Torque}</span></span></div>
                      <div><span className='Question'>Horsepower = <span className='Answer'>{Horsepower}</span></span></div>
                      <div><span className='Question'>Acceleration = <span className='Answer'>{Acceleration}</span></span></div>
                      <div><span className='Question'>Transmission = <span className='Answer'>{Transmission}</span></span></div>
                      <div><span className='Question'>Top Speed = <span className='Answer'>{TopSpeed}</span></span></div>
                      <div><span className='Question'>Special = <span className='Answer'>{Special}</span></span></div>
                      <div><span className='Question'>Seats = <span className='Answer'>{person}</span></span></div> 
                      <div><span className='Question'>Made In = <span className='Answer'>{Madein}</span></span></div> 
                      <span className='only-This-info'>You Can Click Photo For This Car info Video</span>                    
                      <span className='Question-Price'>Price Starting at = <span className='Answer-Price'>{price}</span></span>
                      <div className="react-container" >
             <i className="fa-solid fa-heart love-heart "></i><span className="count-Love">1328</span> 
              <i className="fa-solid fa-star Star "></i><span className="count-star">1328</span>             
              </div>                  
              </div>
              <div className="Popula-Right">  
              <div className="car-logo-container">
                 <img className='car-logo' src={CarLogo} /> 
                 </div>                                              
                  <a href={href}>
  
                    <div className="car-img-container">
                    <img className='car-img' src={image} />     
                    </div>                                    
                 </a>                                                                       
              </div>
          </div>
                  
        </div>
        
      );
    }
    
    export default AllShow;