import React from 'react';
import Navigation from './Component/Navigation';
import { Router,Switch, Route} from 'react-router-dom';
import ListDepartment from './Component/ListDepartment';
import ListEmployee from './Component/ListEmployee';
import Department from './Component/Department';
import Employee from './Component/Employee';


 const Home:React.FC=()=>{
  return(<>
  
  <h1>Employee management system</h1>
  
  
  
  </>);



 }
function App() {
  return (
    
    <>
<Navigation/>
<Switch>
<Route exact path="/"><Home/></Route>
<Route exact path="/listdepartment"><ListDepartment/></Route>
<Route exact path="/listemployee"><ListEmployee/></Route>
<Route exact path="/edit_department/:id"><Department/></Route>
<Route exact path="/department"><ListDepartment/></Route>
<Route exact path="/add-department"><Department/></Route>
<Route exact path="/edit_employee/:id"><Employee/></Route>
<Route exact path="/employee"><ListEmployee/></Route>
<Route exact path="/add-employee"><Employee/></Route>

</Switch>
</>

  );
}

export default App;
