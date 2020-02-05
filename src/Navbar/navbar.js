import React from 'react'
import {Link} from 'react-router-dom'
import {ContextConsumer} from "../Content/Context.js"

export default function navbar() {
	return (
		<ContextConsumer>
			{user =>

			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			  <Link className="navbar-brand" to="/">Relicário</Link>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			      
			      <li className="nav-item">
			        <Link className="nav-link" to="/profile">Perfil</Link>
			      </li>
			      <li className="nav-item dropdown">
			        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          Mercado Livre
			        </Link>
			        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
			          <Link className="dropdown-item" to={(user.usuario.token !== "")?"/ml-home":"/falha-login"} >Logar</Link>
			          <div className="dropdown-divider"></div>
			          <Link className="dropdown-item" to={(user.usuario.token !== "")?"/ml-copia":"/falha-login"}>Copiar vendas</Link>
			          <div className="dropdown-divider"></div>
			          <Link className="dropdown-item" to={(user.usuario.token !== "")?"/ml-relat":"/falha-login"}>Relatórios</Link>
			        </div>
			      </li>
			    </ul>

			    <ul className="navbar navbar-nav">
			    		<li className="nav-item">
							{(!user.usuario.name)?
								<Link className="nav-link" to="/login">Fazer Login</Link>:								
								<Link className="nav-link" to="/profile">{user.usuario.name}</Link>								
							}
			    		</li>
			    	</ul>	
			  </div>
			</nav>
			}
		</ContextConsumer>
	)
}