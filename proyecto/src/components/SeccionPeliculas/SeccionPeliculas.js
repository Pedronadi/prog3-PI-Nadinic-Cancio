import React, {Component} from "react";
import MovieCard from "../MovieCard/MovieCard";
import {useState,useEffect} from "react";
const api = "https://api.themoviedb.org/3/movie/popular?api_key=4538691d5c60f1ca0445b38ca446d641";

function SeccionPeliculas(props) {

    const [peliculas, setPeliculas] = useState([]);
    useEffect(() => {
        fetch(api)
        .then(response => response.json())
        .then(data => setPeliculas(data.results.slice(0, 5)))
        .catch(error => console.log(error)
        )
    }, [])
    return (
            <section class="row cards" id="movies">
                {peliculas.length === 0 ? <h3>Cargando...</h3> : peliculas.map( peli => 
                {
                    return <MovieCard peli={peli} key={peli.id} />
                })}
            </section>
        )
}
export default SeccionPeliculas;
