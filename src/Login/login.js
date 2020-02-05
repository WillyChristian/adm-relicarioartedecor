import React from 'react'
import "./Login.css"

// import from files 
import {ContextConsumer} from '../Content/Context.js'

export default function Login() {
	return (
		<div>
			<ContextConsumer>
				{user =>
					<form action="#" className="login-form">
						<h1>BEM VINDO!</h1>
						<div className="text-user">
							<input className="user" type="text" placeholder="Usuário" />
						</div>
						<div className="text-pass">
							<input className="pass" type="password" placeholder="Senha"/>
						</div>
						<div className="container-fluid button-container"> 	
							<button 
								type="button"
									 onClick={()=> user.caduser()}
								className="m-1 btn btn-primary"
								>
								Login
							</button>
						</div>
					</form>
				}    
			</ContextConsumer>
		</div>
	)
}