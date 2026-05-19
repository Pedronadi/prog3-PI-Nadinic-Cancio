import React, {Component} from "react";
import SerieCard from "../SerieCard/SerieCard";
import { useState,useEffect } from "react";
const api = "https://api.themoviedb.org/3/tv/popular?api_key=4538691d5c60f1ca0445b38ca446d641";

function Series(props) {

    const [series, setSeries] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [cargarMas, setCargarMas] = useState(1);

    useEffect(() => {
        fetch(api)
        .then(response => response.json())
        .then(data => setSeries(data.results))
        .catch(error => console.log(error)
        )
    }, [])

    const cargarSeries = () => {
        console.log("me ejecuto");  
        fetch(api + "&page=" + (cargarMas + 1))
        .then(res => res.json())
        .then(data => setSeries(series.concat(data.results))) 
        .catch(err => console.log(err));
    }
    const handleChange = (e) => {
        setBusqueda(e.target.value);
    }
 
    return (  
          <React.Fragment>
                <div>
               <h2 class="alert alert-warning">Todas las series</h2>
                  <form class="filter-form px-0 mb-3" action="" method="get">
                    <input type="text"
                    placeholder="Buscar serie..."
                    value={busqueda}
                    onChange={handleChange}
                />
                </form>
                </div>
            <section class="row cards all-series" id="series">
                
                {series.length === 0 ? <h3>Cargando...</h3> : series.map( serie => 
                {
                    return <SerieCard serie={serie} key={serie.id} />
                   
                })}
                 
           </section>
           <button class="btn btn-info" onClick={() => cargarSeries()}>Cargar más</button>
           </React.Fragment>
        )
    }

        export default Series;