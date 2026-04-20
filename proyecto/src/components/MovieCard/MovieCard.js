import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class MovieCard extends Component{
    constructor(props){
        super(props);
        this.state = {
        mostrarMas: false
    }
    }
    mostrameMas = () =>{
        this.setState({
            mostrarMas: !this.state.mostrarMas
        })
    }
    render(){
        return(
         <React.Fragment>
        <article className="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.peli.poster_path}`} className="card-img-top"
                    alt="..."></img>
                <div className="cardBody">
                    <h5 className="card-title">{this.props.peli.title}</h5>
                 <section className={this.state.mostrarMas ? "show" : "hide"}>
                    <p className="card-text">{this.props.peli.overview}</p>
                    </section>
                    <button className="btn btn-primary" onClick={this.mostrameMas}>{this.state.mostrarMas ? "Ver menos": "Ver más"} </button>
                    <a href="" className="btn alert-primary">🩶</a>
                    
                </div>
                <Link to={`/detalles/movie/${this.props.peli.id}`} className="btn btn-primary">Ver detalle</Link>
            </article>
            
        </React.Fragment> 
        )
    }
}
export default MovieCard