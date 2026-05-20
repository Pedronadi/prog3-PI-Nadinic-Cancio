import React from "react";
import {useState, useEffect} from "react";
import { withRouter } from "react-router-dom"

function Registrar(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const controlarCambio = (e,campo) => {
        if(campo === "email"){
            setEmail(e.target.value)
        }
        else if(campo === "password"){
            setPassword(e.target.value)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

            let usuarioARegistrar = {
            email: email,
            password: password,
            createdAT: Date.now()
        }

        if(email.includes("@") === false){
            alert("Email mal formateado")
            return;
        }
        if(password.length < 5 || password.length > 12){
            alert("La extensión del password debe ser de 5 a 12 caracteres")
            return;
        }
        let usersStorage = localStorage.getItem("users");
        if( usersStorage !==null){
            let usersParseado = JSON.parse(usersStorage);
            console.log(usuarioARegistrar.email);     
            let usersFiltrado = usersParseado.filter(user => user.email === usuarioARegistrar.email);
            if(usersFiltrado.length > 0){
                alert("Este mail ya esta en uso")
                return;
            }
                else{
        usersParseado.push(usuarioARegistrar);
       let usersJson = JSON.stringify(usersParseado);
       localStorage.setItem("users", usersJson);
        props.history.push("/login");
    }
        }
        else{
        let usersInicial = [usuarioARegistrar]
        let usersJson = JSON.stringify(usersInicial);
        localStorage.setItem("users", usersJson);
        props.history.push("/Login");
    }
    }
    return (
         <React.Fragment>
        <h2 class="alert alert-primary">Registro</h2>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form onSubmit={(e) => onSubmit(e)}>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input onChange={(e) => controlarCambio(e, "email")} type="email" class="form-control" id="email" placeholder="Ingresá tu email"></input>
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input onChange={(e) => controlarCambio(e, "password")} type="password" class="form-control" id="password" placeholder="Ingresá tu contraseña"></input>
                    </div>
                </form>
            </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block" onClick={(e) => onSubmit(e)}>Registrarse</button>
        <p class="mt-3 text-center">¿Ya tenés cuenta? <a href="./login">Iniciar sesión</a></p>
    </React.Fragment>
        )
}

export default withRouter(Registrar)