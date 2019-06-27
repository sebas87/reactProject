import React from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from "./Home/home";
import Accounts from './Accounts/accounts';
import FormAccount from './Accounts/form_account';
import Users from './Users/users';
import FormUser from './Users/form_user';


class App extends React.Component { 
 
  render (){
    return(
      <HashRouter>
        <div>
            <h1>Bank System</h1>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/accounts">Accounts</NavLink></li>
              <li><NavLink to="/users">Users</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/accounts" component={Accounts}/>
              <Route path="/users" component={Users}/>
              <Route path="/form_user" component={FormUser}/>
              <Route path="/form_account" component={FormAccount}/>
            </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;
