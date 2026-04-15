import React from "react";
import Pelicula from "../../components/Pelicula/Pelicula";
export default function Peliculas() {
    return(
          <section class="row cards all-movies" id="movies">
          <h2 class="alert alert-primary">Todas las películas</h2>
            <Pelicula />
        </section>
    )
}