import React, {Component} from "react";
import SerieCard from "../SerieCard/SerieCard";
const api = "https://api.themoviedb.org/3/tv/popular?api_key=4538691d5c60f1ca0445b38ca446d641";
export default class Serie extends Component {
    constructor(props){
        super(props); 
        this.state = {
            series: []
        }
    }           
    componentDidMount(){
        fetch(api)
        .then(response => response.json())
        .then(data => this.setState({series: data.results.slice(0, 5)}))
        .catch(error => console.log(error)
        )
    }
    render(){
        console.log(this.state.series);
        
        return (
            <section class="row cards" id="tv-show">
                
                {this.state.series.length === 0 ? <h3>Cargando...</h3> : this.state.series.map( serie => 
                {
                    return <SerieCard serie={serie} key={serie.id} />
                })}
           </section>
        )
    }
}