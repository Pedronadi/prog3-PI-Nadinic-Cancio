import React, {Component} from "react";
import MovieCard from "../MovieCard/MovieCard";
const api = "https://api.themoviedb.org/3/movie/popular?api_key=4538691d5c60f1ca0445b38ca446d641";
export default class Pelicula extends Component {
    constructor(props){
        super(props); 
        this.state = {
            peliculas: []
        }
    }           
    componentDidMount(){
        fetch(api)
        .then(response => response.json())
        .then(data => this.setState({peliculas: data.results}))
        .catch(error => console.log(error)
        )
    }
    render(){
        console.log(this.state.peliculas);
        
        return (
            <div>
                
                {this.state.peliculas.length === 0 ? <h3>Cargando...</h3> : this.state.peliculas.map( peli => 
                {
                    return <MovieCard peli={peli} key={peli.id} />
                })}
            </div>
        )
    }
}
                 