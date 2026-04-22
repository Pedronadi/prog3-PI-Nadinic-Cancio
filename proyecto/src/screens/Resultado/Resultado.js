import React,{Component} from "react";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import SerieCard from "../../components/SerieCard/SerieCard";
export default class Resultado extends Component {
    constructor(props){
        super(props);
        this.state = {
            resultados:[],
            tipo: "",
            series: [],
            peliculas: []
        }
    }
componentDidMount(){
    const busqueda = this.props.match.params.busqueda;
    const tipo = this.props.match.params.tipo;
    this.setState({busqueda, tipo});
        fetch(`https://api.themoviedb.org/3/search/${tipo}?api_key=4538691d5c60f1ca0445b38ca446d641&query=${busqueda}`)
        .then(respuesta => respuesta.json())
        .then(data => this.setState({resultados: data.results}))
        .catch(error => console.log(error))
   
}

    render() {
    const tipo = this.props.match.params.tipo;

        return( <div>
                {
                    tipo === "tv" ?
                    <section class="row cards" id="tv-show">
                        {this.state.resultados.length === 0 ? <h3>Cargando...</h3> : this.state.resultados.map( serie => 
                        {
                            return <SerieCard serie={serie} key={serie.id} />
                        })}
                    </section>
                    :
                    <section class="row cards" id="movies">
                        {this.state.resultados.length === 0 ? <h3>Cargando...</h3> : this.state.resultados.map( peli => 
                        {
                            return <MovieCard peli={peli} key={peli.id} />
                        
                        })}
                    </section>
                }
   </div>     )
    } 
}
