import React, {Component} from "react";

export default class Registrar extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    controlarCambio = (e,campo) => {
        this.setState({
            [campo]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        if (!email.includes("@")) {
            this.setState({ error: "Email mal formateado" });
            return;
        }
        if (password.length < 5 || password.length > 12) {
            this.setState({ error: "La extensión del password debe ser de 5 a 12 caracteres" });
            return;
        }
       let usuarioARegistrar = {
            email: this.state.email,
            password: this.state.password,
            createdAT: Date.now()
        }


    }
    render(){
        return (
         <React.Fragment>
        <h2 class="alert alert-primary">Registro</h2>

        <div class="row justify-content-center">
            <div class="col-md-6">
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input onChange={(e) => this.controlarCambio(e, "email")} type="email" class="form-control" id="email" placeholder="Ingresá tu email"></input>
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input onChange={(e) => this.controlarCambio(e, "password")} type="password" class="form-control" id="password" placeholder="Ingresá tu contraseña">
                        </input>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Registrarse</button>
                </form>
                <p class="mt-3 text-center">¿Ya tenés cuenta? <a href="./login">Iniciar sesión</a></p>
            </div>
        </div>
    </React.Fragment>
        )
    }
}
