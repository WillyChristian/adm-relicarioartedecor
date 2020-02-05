import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {ContextConsumer} from "../Content/Context.js"
import './style.css'

export default function formulario() {

function buscaCep(){
	let cep = document.getElementById("inputCEP").value
	let end = document.getElementById("inputAddress")
	let cit = document.getElementById("inputCity")
	let sta = document.getElementById("inputState")
	let url = "https://viacep.com.br/ws/"+ cep +"/json/"
	axios.get(url).then(response =>{
		let data = response.data

		document.getElementById("inputCEP").setAttribute("value",data.cep)
		end.setAttribute("value",data.logradouro)
		cit.setAttribute("value",data.localidade)
		sta.setAttribute("value",data.uf)
	})
}
	return (
		<div>
			<ContextConsumer>
			{ user =>
			<div className="card-form bg-secundary">
				  <div className="form-row">		
				    <div className="form-group col-md-6">
				      <input type="text" className="form-control" id="inputNome" placeholder="Nome *" />
				    </div>
				    <div className="form-group col-md-6">
				      <input type="text" className="form-control" id="inputSobreNome" placeholder="Sobrenome *" />
				    </div>
			  	  </div>
  					
				    <div className="form-group">
				      <input type="email" className="form-control" id="inputEmail" placeholder="Email *" />
				    </div>
				    <div className="form-group">
				      <input type="password" className="form-control" id="inputPass" placeholder="Senha *" />
				    </div>
			  
				    <div className="row">
					    <div className="form-group col-md-6">
					      <input type="text" className="form-control" id="inputCEP" placeholder="CEP"/>
					    </div>
					    <div className="form-group col-md-4">
					    	<button
					    		onClick={() => buscaCep()} 
					    		type="button" 
					    		className="btn btn-outline-secondary"
				    		>
				    			Pesquisar
			    			</button>
					    </div>
				    </div>
			  	<div className="form-group">
				    <input type="text" className="form-control" id="inputAddress" placeholder="Rua,Avenida,Estrada..." />
 				</div>
				  <div className="form-row">
				    <div className="form-group col-md-8">
				      <input type="text" className="form-control" id="inputCity" placeholder="Cidade"/>
				    </div>
				    <div className="form-group col-md-4">
				      <input type="text" className="form-control" id="inputState" placeholder="Estado"/>
				    </div>
				  </div>
				  <div class="form-group">
				  	<label htmlFor="accessLevel" className="text-light">Tipo de acesso:</label>
					  <select class="form-control" id="accessLevel">
						    <option>Administrador</option>
						    <option>Gerente</option>
						    <option>Vendedor</option>
					  </select>
				  </div>
				  <div className="container-fluid mx-auto">
					  <button onClick={()=>user.registerUser()} className="m-1 btn btn-secondary">Enviar</button>
					  <Link  className="m-1 btn btn-danger" to='/'>Voltar</Link>
				  </div>
			</div>
			}
			</ContextConsumer>
		</div>
	)
}