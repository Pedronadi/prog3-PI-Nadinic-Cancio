import React, {Component} from "react";
import { Link } from "react-router-dom";
import SerieCard from "../../components/SerieCard/SerieCard";  
import MovieCard from "../../components/MovieCard/MovieCard";


export default class Favoritas extends Component {
    constructor(props){
        super(props);
        this.state = {
            Peliculas: [],
            serie: []
        }
    }
    componentDidMount(){
        let favSerieParseado = JSON.parse(localStorage.getItem("SeriesFav"));
        if(favSerieParseado !== null){

            let arrSeriesfavs = []
            favSerieParseado.map (id => {
                fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=4538691d5c60f1ca0445b38ca446d641`)
                .then(respuesta => respuesta.json())
                .then(data => {
                    arrSeriesfavs.push(data)
                    this.setState({serie: arrSeriesfavs})
                })}   
            )}
         
         let favPeliParseado = JSON.parse(localStorage.getItem("PeliFav"));
            if(favPeliParseado !== null){
                let arrPeliculasFavs = []
                favPeliParseado.map (id => {
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4538691d5c60f1ca0445b38ca446d641`)
                    .then(respuesta => respuesta.json())
                    .then(data => {
                        arrPeliculasFavs.push(data)
                        this.setState({Peliculas: arrPeliculasFavs})
                    })}   
                )
            }
 
    }
    render(){
        
           return(
            <React.Fragment>
                  <h2 class="alert alert-primary">Películas favoritas</h2>
            <section class="row cards" id="movies">
                {this.state.Peliculas.length === 0 ? <h3>No hay películas favoritas</h3> : this.state.Peliculas.map( peli => 
                {
                    return <MovieCard peli={peli} key={peli.id} />
                })}
            </section>
            <h2 class="alert alert-warning">Series favoritas</h2>
            <section class="row cards" id="tv-show">
                {this.state.serie.length === 0 ? <h3>No hay series favoritas</h3> : this.state.serie.map( serie => 
                {
                    return <SerieCard serie={serie} key={serie.id} />
                })}
            </section>
              </React.Fragment>
             
           )
    }
}

