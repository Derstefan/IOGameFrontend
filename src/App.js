import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainComponent from './components/main.component';
import HeaderComponent from './components/header.component';


function App() {
  return (
    <div className="App">
      <Router>
      <HeaderComponent/>
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {MainComponent}></Route>
                          {/*<Route path = "/employees" component = {ListEmployeeComponent}></Route>*/}
                          {/*<Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>*/}
                          {/*<Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>*/}
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              
        </Router>
    </div>
  );
}

export default App;
