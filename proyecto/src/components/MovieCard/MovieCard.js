import React from "react";
function MovieCard(props){
     return(
        <article className="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w500/${props.peli.poster_path}`} className="card-img-top"
                    alt="..."></img>
                <div className="cardBody">
                    <h5 className="card-title">{props.peli.title}</h5>
                    <p className="card-text">{props.peli.overview}</p>
                    <a href= {`./MovieDetails/${props.peli.id}`} className="btn btn-primary">Ver más</a>
                    <a href="" className="btn alert-primary">🩶</a>
                </div>
            </article>
     )
}

export default MovieCard;