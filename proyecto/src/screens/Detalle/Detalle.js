import React, {Component}from "react";

export default class Detalle extends Component {
    constructor(props){
        super(props);
        this.state = {
            pelicula: null,
            serie: null,
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        const tipo = this.props.match.params.tipo;
        if(tipo === "movie"){
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4538691d5c60f1ca0445b38ca446d641`)
            .then(respuesta => respuesta.json())
            .then(data => this.setState({pelicula: data}))
            .catch(error => console.log(error))
        }
        else if(tipo === "tv"){
            fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=4538691d5c60f1ca0445b38ca446d641`)
            .then(respuesta => respuesta.json())
            .then(data => this.setState({serie: data}))
            .catch(error => console.log(error))
        }

    }
    render(){
        console.log(this.props);
        
        const pelicula = this.state.pelicula;
        const serie = this.state.serie;
        const tipo = this.props.match.params.tipo;
        if(tipo === "movie" && !pelicula){
            return
            <div> cargando...</div>;
        }
        if(tipo === "tv" && !serie){
            return<div> cargando...</div>;
        }
        if(tipo === "movie"){
            return(
                <React.Fragment>      
                    
                    <h2 class="alert alert-primary">{pelicula.title}</h2>
        <section class="row">
            <img class="col-md-6" src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt=""></img>
            <section class="col-md-6 info">
                <h3>Descripción</h3>
                <p class="description">{pelicula.overview}</p>
                <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {pelicula.release_date}</p>
                <p class="mt-0 mb-0 length"><strong>Duración:</strong> {pelicula.runtime}</p>
                <p class="mt-0" id="votes"><strong>Puntuación:</strong> {pelicula.vote_average}</p>
            </section>
        </section>
        </React.Fragment>
            )
        }
        else{
            return(
                <React.Fragment>
                     <h2 class="alert alert-warning">{serie.name}</h2>
        <section class="row">
            <section class="col-md-6 info">
                <h3>Descripción</h3>
                <p class="description">{serie.overview}</p>
                <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {serie.first_air_date}</p>
                <p class="mt-0 mb-0" id="episodes"><strong>Número de capítulos:</strong> {serie.number_of_episodes}</p>
                <p class="mt-0 seasons"><strong>Temporadas:</strong> {serie.number_of_seasons}</p>
            </section>
            <img class="col-md-6" src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt=""></img>
        </section>
                </React.Fragment>
            )
        }
    }   
}
