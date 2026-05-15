import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {useState, useEffect} from "react";
function MovieCard(props) {

    const [mostrarMas, setMostrarMas] = useState(false);
    const [favorito, setFavorito] = useState(false);  

    useEffect(() => {
        let fav = localStorage.getItem("PeliFav")
        if(fav !== null){
            let Parseado = JSON.parse(fav)
            let EsFav = Parseado.includes(props.peli.id)
            if( EsFav ){
                setFavorito(true)
            }
        }
    }, [])

    const mostrameMas = () =>{
        setMostrarMas(!mostrarMas)
    }

        const sumarFavoritos = (id) =>{
        let fav = localStorage.getItem("PeliFav");
        if(fav === null){
            let favInicial = [props.peli.id];
            localStorage.setItem("PeliFav", JSON.stringify(favInicial));
        }
        else{
            let favParseado = JSON.parse(fav);
            favParseado.push(props.peli.id);
            localStorage.setItem("PeliFav", JSON.stringify(favParseado));
        }
        setFavorito(!favorito);
    }

    const QuitarFavoritos = (id) =>{
        let fav = localStorage.getItem("PeliFav");
        if(fav !== null){
            let favParseado = JSON.parse(fav);
            let favFiltrado = favParseado.filter(id => id !== props.peli.id);
            localStorage.setItem("PeliFav", JSON.stringify(favFiltrado));
        }
        setFavorito(!favorito);
    }

    return(
         <React.Fragment>
        <article className="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w500/${props.peli.poster_path}`} className="card-img-top"
                    alt="..."></img>
                <div className="cardBody">
                    <h5 className="card-title">{props.peli.title}</h5>
                 <section className={mostrarMas ? "show" : "hide"}>
                    <p className="card-text">{props.peli.overview}</p>
                    </section>
                    <button className="btn btn-primary" onClick={mostrameMas}>
                        {mostrarMas ? "Ver menos" : "Ver más"}
                    </button>
                    <button className="btn alert-primary" onClick={() => favorito ? QuitarFavoritos(props.peli.id) : sumarFavoritos()}>
                        {favorito ? "❤️" : "🤍"}
                    </button>
                </div>
                <Link to={`/detalles/movie/${props.peli.id}`} className="btn btn-primary">Ver detalle</Link>
            </article>
            
        </React.Fragment> 
        )
    }

export default MovieCard
     