import React, {Component} from "react";
import MovieCard from "../MovieCard/MovieCard";
import {useState,useEffect} from "react";
const api = "https://api.themoviedb.org/3/movie/popular?api_key=4538691d5c60f1ca0445b38ca446d641";

function Peliculas(props) {

    const [peliculas, setPeliculas] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [cargarMas, setCargarMas] = useState(1);
    const [backup, setBackup] = useState([]);

    useEffect(() => {
        fetch(api)
        .then(response => response.json())
        .then(data => {
            setPeliculas(data.results);
            setBackup(data.results);
        })
        .catch(error => console.log(error)
        )
    }, [])

    const cargarPeliculas = () => {
        console.log("me ejecuto");  
       fetch(api + "&page=" + (cargarMas + 1))
            .then(res => res.json())
            .then(data => {
                let nuevasPeliculas =
                    peliculas.concat(data.results);
                setPeliculas(nuevasPeliculas);
                setBackup(
                    backup.concat(data.results)
                );
                setCargarMas(cargarMas + 1);
            })
            .catch(err => console.log(err));
    }
    const handleChange = (e) => {
        setBusqueda(e.target.value);
        const peliculasFiltradas = backup.filter(peli =>
            peli.title.toLowerCase().includes(busqueda.toLowerCase())
        );
        setPeliculas(peliculasFiltradas);

    }
 
    return (  
          <React.Fragment>
                <div>
                <h2 class="alert alert-primary">Todas las películas</h2>
                  <form class="filter-form px-0 mb-3" action="" method="get">
                    <input type="text"
                    placeholder="Buscar película..."
                    value={busqueda}
                    onChange={handleChange}
                />
                </form>
                </div>
            <section class="row cards" id="movies">
                
                {peliculas.length === 0 ? <h3>Cargando...</h3> : peliculas.map( peli => 
                {
                    return <MovieCard peli={peli} key={peli.id} />
                   
                })}
                 
           </section>
           <button class="btn btn-info" onClick={() => cargarPeliculas()}>Cargar más</button>
           </React.Fragment>
        )
    }

        export default Peliculas;

// export default class Pelicula extends Component {
//     constructor(props){
//         super(props); 
//         this.state = {
//             peliculas: [],
//             cargarMas: 1,
//             busqueda: ""
//         }
//     }           
//     componentDidMount(){
//         fetch(api)
//         .then(response => response.json())
//         .then(data => this.setState({
//             peliculas: data.results,
//             backup : data.results, 
//             cargarMas: this.state.cargarMas + 1}))
//         .catch(error => console.log(error)
//         )
//     }
//     cargarMas(){
//         console.log("me ejecuto");
        
//         fetch(api + "&page=" + this.state.cargarMas)
//         .then(res => res.json())
//         .then(data => this.setState({
//             peliculas: this.state.peliculas.concat(data.results), 
//             backup : this.state.backup.concat(data.results),
//             cargarMas: this.state.cargarMas + 1})) 
//         .catch(err => console.log(err));
//     }
//     handleChange = (e) => {
//         this.setState({
//             busqueda: e.target.value
//         }, () =>{
//             const peliculasFiltradas = this.state.backup.filter(peli =>
//                 peli.title.toLowerCase().includes(this.state.busqueda)
//             );
//             this.setState({peliculas : peliculasFiltradas})
//         });
//     }
//     render(){
//         console.log(this.state.peliculas);
        
//         return (
//             <React.Fragment>
//                 <div>
//                 <h2 class="alert alert-primary">Todas las películas</h2>
//                   <form class="filter-form px-0 mb-3" action="" method="get">
//                     <input type="text"
//                     placeholder="Buscar película..."
//                     value={this.state.busqueda}
//                     onChange={this.handleChange}
//                 />
//                 </form>
//                 </div>
//             <section class="row cards" id="movies">
                
//                 {this.state.peliculas.length === 0 ? <h3>Cargando...</h3> : this.state.peliculas.map( peli => 
//                 {
//                     return <MovieCard peli={peli} key={peli.id} />
                   
//                 })}
                 
//            </section>
//            <button class="btn btn-info" onClick={() => this.cargarMas()}>Cargar más</button>
//            </React.Fragment>
//         )
//     }
// }
