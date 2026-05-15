import React, {Component}from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
function SerieCard(props) {

    const [mostrarMas, setMostrarMas] = useState(false);
    const [favorito, setFavorito] = useState(false);
    useEffect(() => {
        let fav = localStorage.getItem("SeriesFav")
        if(fav !== null){
            let Parseado = JSON.parse(fav)
            let EsFav = Parseado.includes(props.serie.id)
            if( EsFav ){
                setFavorito(true)
            }
        }
    }, [])

    const mostrameMas = () =>{
        setMostrarMas(!mostrarMas)
    }

    const sumarFavoritos = (id) =>{
        let fav = localStorage.getItem("SeriesFav");
        if(fav === null){
            let favInicial = [props.serie.id];
            localStorage.setItem("SeriesFav", JSON.stringify(favInicial));
        }
        else{
            let favParseado = JSON.parse(fav);
            favParseado.push(props.serie.id);
            localStorage.setItem("SeriesFav", JSON.stringify(favParseado));
        }
        setFavorito(!favorito);
    }
    const QuitarFavoritos = (id) =>{
        let fav = localStorage.getItem("SeriesFav");
        if(fav !== null){
            let favParseado = JSON.parse(fav);
            let favFiltrado = favParseado.filter(id => id !== props.serie.id);
            localStorage.setItem("SeriesFav", JSON.stringify(favFiltrado));
        }
        setFavorito(!favorito);
    }
    return(
        <article className="single-card-on-air mb-3">
                <img src={`https://image.tmdb.org/t/p/w500/${props.serie.poster_path}`} className="card-img-top"
                    alt="..."></img>
                <div className="cardBody">
                    <h5 className="card-title">{props.serie.name}</h5>
                    <section className={mostrarMas ? "show" : "hide"}>
                    <p className="card-text">{props.serie.overview}</p>
                    </section>
                    <button className="btn btn-primary" onClick={mostrameMas}>
                        {mostrarMas ? "Ver menos" : "Ver más"}
                    </button>
                    <button className="btn alert-primary" onClick={() => favorito ? QuitarFavoritos(props.serie.id) : sumarFavoritos()}>
                        {favorito ? "❤️" : "🤍"}
                    </button>
                </div>
                <Link to={`/detalles/tv/${props.serie.id}`} className="btn btn-primary">Ver detalle</Link>
            </article>
        )
}
export default SerieCard;   

