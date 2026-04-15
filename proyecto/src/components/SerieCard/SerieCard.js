import React from "react";
function SerieCard(props){
     return(
        <article className="single-card-on-air mb-3">
                <img src={`https://image.tmdb.org/t/p/w500/${props.serie.poster_path}`} className="card-img-top"
                    alt="..."></img>
                <div className="cardBody">
                    <h5 className="card-title">{props.serie.name}</h5>
                    <p className="card-text">{props.serie.overview}</p>
                    <a href={`/detalles/series/${props.serie.id}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Ver más</a>
                    <a href="" className="btn alert-primary">🩶</a>
                </div>
            </article>
        )
}

export default SerieCard;   