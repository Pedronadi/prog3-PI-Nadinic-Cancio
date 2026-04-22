import React, {Component} from "react";
import { withRouter } from "react-router-dom";
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    controlarCambio = (e,campo) => {
        this.setState({
            [campo]: e.target.value
        })
    }
    onSubmit = (e) => {
        console.log('ejecuta onSubmit');
        e.preventDefault();
        let usuarioAValidar = {
            email: this.state.email,
            password: this.state.password,
        }
        let usersStorage = localStorage.getItem("users");
        if(usersStorage !== null){
            let usersParseado = JSON.parse(usersStorage);
            let usersFiltrado = usersParseado.filter(user => user.email === usuarioAValidar.email && user.password === usuarioAValidar.password);  
            if(usersFiltrado.length > 0){
                this.props.history.push("/");
            }
            else{
                this.setState({error: "Email o contraseña incorrectos"})
                alert("Email o contraseña incorrectos")
                return;
            }
            
        }
    }
    render(){
        return(
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
                <p class="mt-3 text-center">¿No tenés cuenta? <a href="./register">Registrarse</a></p>
            </div>
        </div>
        )}
}

