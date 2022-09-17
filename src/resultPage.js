import Header from './Header';
import Resualt from './Resualt'

function ResultPage({ Caritem , setCaritem , FilterCar , setFilterCar }) {
return(
<div className="App">
  <Header
  Caritem={Caritem}
  setCaritem={setCaritem}
  FilterCar={FilterCar}
  setFilterCar={setFilterCar}
  /> 
 
  <Resualt/>
 </div>
);
}

export default ResultPage ;