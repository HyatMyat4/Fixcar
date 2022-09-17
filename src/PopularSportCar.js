
import PopularSportCar2 from './PopularSportCar2'
function PopularSportCar({ Caritem , FilterCar }) {
 const Carfilter4 = Caritem.filter(car => car.CarType.includes("sport"));

    return (      
<div className='p1'>
{FilterCar.length > 0 ?

FilterCar.map((item) => (
      <PopularSportCar2 
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
  
 )) :  console.log("it")
}
    {Carfilter4.map((item) => (
      <PopularSportCar2 
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
  
  export default PopularSportCar;