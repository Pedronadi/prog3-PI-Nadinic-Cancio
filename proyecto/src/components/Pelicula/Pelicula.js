import React, {Component} from "react";

const api = "https://api.themoviedb.org/3/movie/popular?api_key=4538691d5c60f1ca0445b38ca446d641"

export default class Pelicula extends Component {
    constructor(props){
        super(props);
        this.state = {
            peliculas: []
        }
    }
    componentDidMount(){
        fetch(api)
        .then(respuesta => respuesta.json())
        .then(data => this.setState({peliculas: data.results}))
    }
    render(){
        return (
            <div>
                <h1>Peliculas Populares</h1>
                <ul>
                    {this.state.peliculas.map(pelicula => <li key={pelicula.id}>{pelicula.title}</li>)}
                </ul>
            </div>
        )
    }
}