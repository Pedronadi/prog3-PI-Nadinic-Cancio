import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class MovieCard extends Component{
    constructor(props){
        super(props);
        this.state = {
        mostrarMas: false,
        favorito: false
    }
    }
    componentDidMount(){
        let fav = localStorage.getItem("PeliFav")
        if(fav !== null){
            let Parseado = JSON.parse(fav)
            let EsFav = Parseado.includes(this.props.peli.id)
            if( EsFav ){
                this.setState({favorito: true})
                
            }
        }
    }
    mostrameMas = () =>{
        this.setState({
            mostrarMas: !this.state.mostrarMas
        })
    }
     sumarFavoritos = (id) =>{
        let fav = localStorage.getItem("PeliFav");
        if(fav === null){
            let favInicial = [this.props.peli.id];
            localStorage.setItem("PeliFav", JSON.stringify(favInicial));
        }
        else{
            let favParseado = JSON.parse(fav);
            favParseado.push(this.props.peli.id);
            localStorage.setItem("PeliFav", JSON.stringify(favParseado));
        }
        this.setState({
            favorito: !this.state.favorito
        });
        
    }
    QuitarFavoritos = (id) =>{
        let fav = localStorage.getItem("PeliFav");
        if(fav !== null){
            let favParseado = JSON.parse(fav);
            let favFiltrado = favParseado.filter(id => id !== this.props.peli.id);
            localStorage.setItem("PeliFav", JSON.stringify(favFiltrado));
        }
        this.setState({
            favorito: !this.state.favorito
        });
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
                    <button className="btn alert-primary" onClick={this.state.favorito ? this.QuitarFavoritos : this.sumarFavoritos}>
                        {this.state.favorito ? "❤️" : "🤍"}
                    </button>
                </div>
                <Link to={`/detalles/movie/${this.props.peli.id}`} className="btn btn-primary">Ver detalle</Link>
            </article>
            
        </React.Fragment> 
        )
    }
}
export default MovieCard