import React from "react";

function Login(){
    return(

        <React.Fragment>

           <h2 className="alert alert-primary">Iniciar sesión</h2>

        <div className="row justify-content-center">
        
            <div className="col-md-6">
                <form>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Ingresá tu email"></input>
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" class="form-control" id="password" placeholder="Ingresá tu contraseña">
                        </input>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Iniciar sesión</button>
                </form>
                <p class="mt-3 text-center">¿No tenés cuenta? <a href="./registro">Registrarse</a></p>
            </div>
        </div>
        </React.Fragment>
    )
}
export default Login;