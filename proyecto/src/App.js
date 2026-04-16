import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header/Header";
import Login from "./screens/Login/Login";
import Registro from "./screens/Registro/Registro";
import Peliculas from "./screens/Peliculas/Peliculas";
import Series from "./screens/Series/Series";
import Favoritas from "./screens/Favoritas/Favoritas";
import Detalle from "./screens/Detalle/Detalle";
import NoEncontrado from "./screens/NoEncontrado/NoEncontrado";
import Resultado from "./screens/Resultado/Resultado";
import Home from "./screens/Home/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Header />
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/login" component={Login} />
  <Route path="/registro" component={Registro} />
  <Route path="/peliculas" component={Peliculas} />
  <Route path="/series" component={Series} />
  <Route path="/Favoritas" component={Favoritas} />
  <Route path= "/detalles/:tipo/:id" component={Detalle} />
  <Route path="/resultado/:busqueda" component={Resultado} />
    <Route path="*" component={NoEncontrado} />
</Switch>  
<Footer />
    </div>
  );
}

export default App;
