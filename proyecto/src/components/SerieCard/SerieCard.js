import React, {Component}from "react";
import { Link } from "react-router-dom";
class SerieCard extends Component{
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
            <article className="single-card-on-air mb-3">
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.serie.poster_path}`} className="card-img-top"
                    alt="..."></img>
                <div className="cardBody">
                    <h5 className="card-title">{this.props.serie.name}</h5>
                    <section className={this.state.mostrarMas ? "show" : "hide"}>
                    <p className="card-text">{this.props.serie.overview}</p>
                    </section>
                    <button className="btn btn-primary" onClick={this.mostrameMas}>{this.state.mostrarMas ? "Ver menos": "Ver más"} </button>
                    <a href="" className="btn alert-primary">🩶</a>
                </div>
                <Link to={`/detalles/tv/${this.props.serie.id}`} className="btn btn-primary">Ver detalle</Link>
            </article>
        )
}
}

export default SerieCard;   


