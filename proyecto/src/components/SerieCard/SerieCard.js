import React, {Component}from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class SerieCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            mostrarMas: false,
            favorito: false
        }
    }
    mostrameMas = () =>{
        this.setState({
            mostrarMas: !this.state.mostrarMas
        })
    }
      componentDidMount(){
        let fav = localStorage.getItem("SeriesFav")
        if(fav !== null){
            let Parseado = JSON.parse(fav)
            let EsFav = Parseado.includes(this.props.serie.id)
            if( EsFav ){
                this.setState({favorito: true})
                
            }
        }
    }
    
    sumarFavoritos = (id) =>{
        let fav = localStorage.getItem("SeriesFav");
        if(fav === null){
            let favInicial = [this.props.serie.id];
            localStorage.setItem("SeriesFav", JSON.stringify(favInicial));
        }
        else{
            let favParseado = JSON.parse(fav);
            favParseado.push(this.props.serie.id);
            localStorage.setItem("SeriesFav", JSON.stringify(favParseado));
        }
        this.setState({
            favorito: !this.state.favorito
        });
        
    }
    QuitarFavoritos = (id) =>{
        let fav = localStorage.getItem("SeriesFav");
        if(fav !== null){
            let favParseado = JSON.parse(fav);
            let favFiltrado = favParseado.filter(id => id !== this.props.serie.id);
            localStorage.setItem("SeriesFav", JSON.stringify(favFiltrado));
        }
        this.setState({
            favorito: !this.state.favorito
        });
    }
    render(){
        const isLogged = cookies.get("isLogged");
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
                    {isLogged ? (
                        <button className="btn alert-primary" onClick={this.state.favorito ? this.QuitarFavoritos : this.sumarFavoritos}>
                            {this.state.favorito ? "❤️" : "🤍"}
                        </button>
                    ) : null}
                </div>
                <Link to={`/detalles/tv/${this.props.serie.id}`} className="btn btn-primary">Ver detalle</Link>
            </article>
        )
}
}

export default SerieCard;   


