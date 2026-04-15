import React, {Component} from "react";
import SeccionPeliculas from "../../components/SeccionPeliculas/SeccionPeliculas";
import SeccionSeries from "../../components/SeccionSeries/SeccionSeries";

export default class Home extends Component {
    render(){
        return ( 
            <div>
                <h2 class="alert alert-primary">Popular movies this week</h2>
        <SeccionPeliculas />
        <h2 class="alert alert-warning">TV shows airing today</h2>
        <SeccionSeries />
        </div>

         )
    }
}