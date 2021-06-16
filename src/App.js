import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navegacion from "./components/common/Navegacion";
import Landing from "./components/pages/Landing";
import Pie from "./components/common/Pie";
import Categoria from "./components/pages/Categoria";
import Error404 from "./components/pages/Error404";
import { useEffect, useState, Fragment } from "react";
import Detalle from "./components/pages/Detalle";
import AgregarNoticia from "./components/pages/AgregarNoticia";
import AdminNoticias from "./components/pages/AdminNoticias";
import EditarNoticias from "./components/pages/EditarNoticias";
import AdminCategorias from "./components/pages/AdminCategorias";
import AdminPage from "./components/pages/AdminPage";
import AboutUs from "./components/pages/AboutUs";
import Terminos from "./components/pages/Terminos";
import ContacUs from "./components/pages/ContacUs"

function App() {
  const URLCAT = process.env.REACT_APP_API_URL_CAT;
  const URLNEWS = process.env.REACT_APP_API_URL_NEWS;
  const URLAD = process.env.REACT_APP_API_URL_ADMIN;

  const [news, setNews] = useState([]);
  const [cats, setCats] = useState([]);
  const [admins, setAdmins] = useState([]);

  const consultarNews = async () => {
    try {
      const responsenews = await fetch(URLNEWS);
      if (responsenews.status === 200) {
        setNews(await responsenews.json());
        
      };
    } catch (error) {
      console.log(error);
      alert(
        "Rolling News no está rodando hoy, toca volver a la edición en papel"
      );
    };
  };
  const consultarAdmins = async () => {
    try {
      const responseadmins = await fetch(URLAD);
      if (responseadmins.status === 200) {
        setAdmins(await responseadmins.json());
      };
    } catch (error) {
      console.log(error);
      alert(
        "Rolling News no está pudiendo contactar con los administradores de la web"
      );
    }
  };

  const consultarCats = async () => {
    try{
      const responsecats = await fetch(URLCAT);
      if (responsecats.status === 200) {
        const listarCategorias = await responsecats.json();
        setCats(listarCategorias);
      };
    }catch(error){
      console.log(error);
      alert("En Rolling News no hay categorías, están sobrevaloradas");
    };
  };

  useEffect(() => {
    consultarCats();
    consultarNews();
    consultarAdmins();
  }, []);

  return (
    <Fragment>
      <Router>
        <Navegacion
          cats={cats}
          admins={admins}
          consultarAdmins={consultarAdmins}          
        />
        <Switch>
          <Route exact path="/">
            <Landing news={news} />
          </Route>
          <Route exact path="/admin">
            <AdminPage
            />
          </Route>
          <Route exact path="/admin/agregar">
            <AgregarNoticia
              news={news}
              cats={cats}
              admins={admins}
              consultarNews={consultarNews}
            />
          </Route>
          <Route exact path="/admin/noticias">
            <AdminNoticias
              news={news}
              cats={cats}
              admins={admins}
              consultarNews={consultarNews}
            />
          </Route>
          <Route exact path="/admin/editar/:_id">
            <EditarNoticias
              news={news}
              cats={cats}
              admins={admins}
              consultarNews={consultarNews}
            />
          </Route>
          <Route exact path="/admin/categorias">
            <AdminCategorias
              news={news}
              cats={cats}
              consultarNews={consultarNews}
              consultarCats={consultarCats}
            />
          </Route>
          <Route exact path="/categorias/:name">
            <Categoria news={news} cats={cats} />
          </Route>
          <Route exact path="/noticias/:title">
            <Detalle news={news} />
          </Route>
            <Route exact path='/aboutUs'>
            <AboutUs />
          </Route>
            <Route exact path='/TerminosCondiciones'>
            <Terminos />
          </Route>
          <Route exact path="/contacUs">
            <ContacUs/>
          </Route>
          <Route exact path="*">
            <Error404 /> 
          </Route>
        </Switch>
        <Pie />
      </Router>
    </Fragment>
  );
}

export default App;
