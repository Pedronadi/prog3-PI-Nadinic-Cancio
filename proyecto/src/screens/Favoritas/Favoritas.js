import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import SerieCard from "../../components/SerieCard/SerieCard";  
import MovieCard from "../../components/MovieCard/MovieCard";

function Favoritas() {

    const [Peliculas, setPeliculas] = useState([]);
    const [serie, setSerie] = useState([]);
    useEffect(() => {
        let favSerieParseado = JSON.parse(localStorage.getItem("SeriesFav"));
        if(favSerieParseado !== null){
            let arrSeriesfavs = []
            favSerieParseado.map (id => {
                fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=4538691d5c60f1ca0445b38ca446d641`)
                .then(respuesta => respuesta.json())
                .then(data => {
                    arrSeriesfavs.push(data)
                    setSerie(arrSeriesfavs)
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
                        setPeliculas(arrPeliculasFavs)
                    })})}   
    }, [])
    return(
        <React.Fragment>
            <h2 class="alert alert-primary">Películas favoritas</h2>
            <section class="row cards" id="movies">
                {Peliculas.length === 0 ? <h3>No hay películas favoritas</h3> : Peliculas.map( peli => 
                {                    return <MovieCard peli={peli} key={peli.id} />
                }                )}
            </section>
            <h2 class="alert alert-warning">Series favoritas</h2>   
            <section class="row cards" id="tv-show">
                {serie.length === 0 ? <h3>No hay series favoritas</h3> : serie.map( serie => 
                {                    return <SerieCard serie={serie} key={serie.id} />
                }                )}
            </section>
        </React.Fragment>
    )
}
export default Favoritas;
