import React from 'react'
import axios from "axios"

const ContextAPI = React.createContext()


class ContextProvider extends React.Component {

             // Método para autenticação de login
cadUser = () => {
	let email = document.querySelector(".user").value
	let senha = document.querySelector(".pass").value
	
	axios({
		method: "post",
		url: "https://api-relicarioartedecor.herokuapp.com/user/auth",
		data: {
			email: email,
			senha: senha
		}
	}).then(response => {		
		let data = response.data
		console.log(data)
		// document.cookie = "username="+
	}).catch(err => {
		let erro = err.request.response
		alert(erro)
	})	
}



             // MÉTODO PARA CADASTRO DE NOVO USUÁRIO
registerUser =()=>{	
	let nam = document.getElementById("inputNome").value
	let snam = document.getElementById("inputSobreNome").value
	let mai = document.getElementById("inputEmail").value
	let pas = document.getElementById("inputPass").value
	let cep = document.getElementById("inputCEP").value
	let end = document.getElementById("inputAddress").value
	let cit = document.getElementById("inputCity").value
	let sta = document.getElementById("inputState").value
	let opt = document.getElementById("accessLevel").value

	axios({
		method: "post",
		url: "https://api-relicarioartedecor.herokuapp.com/user/register",
		data: {
			name: nam,
			sname: snam,
			email: mai,
			senha: pas,
			cep: cep,
			rua: end,
			cidade: cit,
			estado: sta,
			accessType: opt
		}
	}).then(response => {		
		console.log(response.data)
	}).catch(err => {
		let erro = err.request.response
		alert(erro)
	})
}



	render() {
		return (
			<ContextAPI.Provider value={{
				usuario: this.state,	
				caduser: this.cadUser,
				registerUser: this.registerUser,

			}}>
				{this.props.children}
			</ContextAPI.Provider>
		)
	}
}

const ContextConsumer = ContextAPI.Consumer

export {ContextProvider, ContextConsumer}