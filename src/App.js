import React, {useState} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import Navbar from './Navbar/navbar.js'
import {ContextProvider} from './Content/Context.js'

import Login from './Login/login.js'
import Home from './Home/home.js'
import Profile from "./Profile/profile.js"
import Form from './Formulario/formulario.js'
import mlHome from "./ML/homeML.js"
import mlCopia from "./ML/copiaVendas.js"
import mlRelat from "./ML/relatiorios.js"
import erroLogin from "./Erro/falhaLogin.js"
import Error from "./Erro/error.js"



function App() {
const [user, setUser] = useState("")

function teste(){

  let user = document.cookie
  setUser(user)
}

window.addEventListener("load", () => teste())
  return (
  	<>
  		<ContextProvider>
		<Navbar user={user} />
	    <div className="App">
	    <Switch>
    		<Route path="/" exact component={Home} />
    		<Route path="/profile" component={Profile} />
    		<Route path="/login" component={Login} />	    	
        <Route path="/form" component={Form} />       
        <Route path="/ml-home" component={mlHome} />       
        <Route path="/ml-copia" component={mlCopia} />       
        <Route path="/ml-relat" component={mlRelat} />

 {/* páginas de erro*/}
        <Route path="/falha-login" component={erroLogin}/>       
        <Route path="/error" component={Error} />       
	    </Switch>
	    </div>
	    </ContextProvider>
    </>
  );
}

export default App;
