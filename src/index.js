import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bills from './views/Bills';
import CreateBill from './views/CreateBill'
import reportWebVitals from './reportWebVitals';
import ProtectedRoute from './components/protectedRoute/protectedRoute'
import Non from './views/Non'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Login from './views/Login';
import Accueils from './views/Accueil';


const Root = () => {
  return (
      <Router>
        <Switch>

          <Route exact path='/' component={Login}/>
          <Route exact path='/non' component={Non}/>
          <ProtectedRoute exact path='/bills' component={Bills} />
          <ProtectedRoute exact path='/createbill' component={CreateBill} /> 
          <ProtectedRoute exact path='/acceuil' component={Accueils} /> 
          
        </Switch>
      </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

//chaque route correspond à une page
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
