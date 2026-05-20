import React from "react";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import SerieCard from "../../components/SerieCard/SerieCard";

function Resultado(props) {

    const [resultados, setResultados] = useState([]);
    const [tipo, setTipo] = useState("");
    const [series, setSeries] = useState([]);
    const [peliculas, setPeliculas] = useState([]);
    const tipoBusqueda = props.match.params.tipo;
    useEffect(() => {
        const busqueda = props.match.params.busqueda;
        setTipo(tipoBusqueda);
    }, [props.match.params.busqueda, props.match.params.tipo]);
    useEffect(() => {
        const busqueda = props.match.params.busqueda;
        fetch(`https://api.themoviedb.org/3/search/${tipoBusqueda}?api_key=4538691d5c60f1ca0445b38ca446d641&query=${busqueda}`)
        .then(respuesta => respuesta.json())
        .then(data => setResultados(data.results))
        .catch(error => console.log(error))
    }
    , [props.match.params.busqueda, props.match.params.tipo])

            return( <div>
                {
                    tipo === "tv" ?
                    <section class="row cards" id="tv-show">
                        {resultados.length === 0 ? <h3>Cargando...</h3> : resultados.map( serie => 
                        {
                            return <SerieCard serie={serie} key={serie.id} />
                        })}
                    </section>
                    :
                    <section class="row cards" id="movies">
                        {resultados.length === 0 ? <h3>Cargando...</h3> : resultados.map( peli => 
                        {
                            return <MovieCard peli={peli} key={peli.id} />
                        
                        })}
                    </section>
                }
   </div>     )
}
export default Resultado;