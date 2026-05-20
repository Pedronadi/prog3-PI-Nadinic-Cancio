import React from "react";
import {useState, useEffect} from "react";
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();
function Login(props) {

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
        let usuarioAValidar = {
            email: email,
            password: password,
        }
        let usersStorage = localStorage.getItem("users");
        if(usersStorage !== null){
            let usersParseado = JSON.parse(usersStorage);
            let usersFiltrado = usersParseado.filter(user => user.email === usuarioAValidar.email && user.password === usuarioAValidar.password);
            if(usersFiltrado.length > 0){
                cookies.set("isLogged", true, { path: "/" });
                props.history.push("/");
            }
            else{
                alert("Email o contraseña incorrectos")
                return;
            }
        }
    }
    return ( 
    <React.Fragment>
            <h2 class="alert alert-primary">Iniciar sesion</h2>
            <div class="row justify-content-center">
            <div class="col-md-6">
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input onChange={(e) => this.controlarCambio(e, "email")} type="email" class="form-control" id="email" placeholder="Ingresá tu email"></input>
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input onChange={(e) => this.controlarCambio(e, "password")} type="password" class="form-control" id="password" placeholder="Ingresá tu contraseña"></input>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Iniciar sesión</button>
                </form>
                <p class="mt-3 text-center">¿No tenés cuenta? <a href="./Registro">Registrarse</a></p>
            </div>
        </div>
        </React.Fragment>
    )
}
export default withRouter(Login);



    
