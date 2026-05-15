import SerieCard from "../SerieCard/SerieCard";
import {useState,useEffect} from "react";
const api = "https://api.themoviedb.org/3/tv/popular?api_key=4538691d5c60f1ca0445b38ca446d641";


function SeccionSeries(props) {

    const [series, setSeries] = useState([]);  
    useEffect(() => {
        fetch(api)
        .then(response => response.json())
        .then(data => setSeries(data.results.slice(0, 5)))
        .catch(error => console.log(error)
        )
    }, [])
    return (
            <section class="row cards" id="tv-show">
                {series.length === 0 ? <h3>Cargando...</h3> : series.map( serie => 
                {
                    return <SerieCard serie={serie} key={serie.id} />
                })}
            </section>
        )
}
export default SeccionSeries;
