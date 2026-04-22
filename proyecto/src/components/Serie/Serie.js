import React, {Component} from "react";
import SerieCard from "../SerieCard/SerieCard";
const api = "https://api.themoviedb.org/3/tv/popular?api_key=4538691d5c60f1ca0445b38ca446d641";
export default class Serie extends Component {
    constructor(props){
        super(props); 
        this.state = {
            series: [],
            cargarMas: 2
        }
    }           
    componentDidMount(){
        fetch(api)
        .then(response => response.json())
        .then(data => this.setState({series: data.results}))
        .catch(error => console.log(error)
        )
    }
    cargarMas(){
        
        fetch(api + "&page=" + this.state.cargarMas)
        .then(res => res.json())
        .then(data => this.setState({series: this.state.series.concat(data.results), cargarMas: this.state.cargarMas + 1})) 
        .catch(err => console.log(err));
    }
    render(){
        console.log(this.state.series);
        
        return (
            <React.Fragment>
            <section class="row cards" id="tv-show">
                
                {this.state.series.length === 0 ? <h3>Cargando...</h3> : this.state.series.map( serie => 
                {
                    return <SerieCard serie={serie} key={serie.id} />
                })}
           </section>
           <button class="btn btn-info" onClick={() => this.cargarMas()}>Cargar más</button>
           </React.Fragment>
        )
    }
}