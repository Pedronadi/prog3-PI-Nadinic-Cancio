import React, {Component} from "react";
import MovieCard from "../MovieCard/MovieCard";
const api = "https://api.themoviedb.org/3/movie/popular?api_key=4538691d5c60f1ca0445b38ca446d641";
export default class Pelicula extends Component {
    constructor(props){
        super(props); 
        this.state = {
            peliculas: [],
            cargarMas: 1
        }
    }           
    componentDidMount(){
        fetch(api)
        .then(response => response.json())
        .then(data => this.setState({peliculas: data.results, cargarMas: this.state.cargarMas + 1}))
        .catch(error => console.log(error)
        )
    }
    cargarMas(){
        console.log("me ejecuto");
        
        fetch(api + "&page=" + this.state.cargarMas)
        .then(res => res.json())
        .then(data => this.setState({peliculas: this.state.peliculas.concat(data.results), cargarMas: this.state.cargarMas + 1})) 
        .catch(err => console.log(err));
    }
    render(){
        console.log(this.state.peliculas);
        
        return (
            <React.Fragment>
            <section class="row cards" id="movies">
                
                {this.state.peliculas.length === 0 ? <h3>Cargando...</h3> : this.state.peliculas.map( peli => 
                {
                    return <MovieCard peli={peli} key={peli.id} />
                   
                })}
                 
           </section>
           <button class="btn btn-info" onClick={() => this.cargarMas()}>Cargar más</button>
           </React.Fragment>
        )
    }
}
