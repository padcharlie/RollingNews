import './App.css';
import { Fragment } from 'react/cjs/react.production.min';
import { BrowserRouter as Router, Switch,  Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/common/Navegacion';
import Landing from './components/pages/Landing';
import Pie from './components/common/Pie';
import Categoria from './components/pages/Categoria';
import Error404 from './components/pages/Error404';
import { useEffect, useState } from 'react';
import Detalle from './components/pages/Detalle';

function App() {

const URLCAT = process.env.REACT_APP_API_URL_CAT;
const URLNEWS = process.env.REACT_APP_API_URL_NEWS;

const [news,setNews]=useState([]);
const [cats,setCats]=useState([]);

const consultarNews = async()=>{
    try {
    const responsenews = await fetch(URLNEWS);
    if (responsenews.status === 200){
      setNews(await responsenews.json());
    }
    console.log(news);   
    } catch (error) {
      console.log(error)
      alert("Rolling News no está rodando hoy, toca volver a la edición en papel");
  }
};

const consultarCats = async()=>{
  try {
  const responsecats = await fetch(URLCAT);
  if (responsecats.status === 200){
    setCats(await responsecats.json());
  }
  } catch (error) {
    console.log(error)
    alert("Rolling News solo presenta la opción 'noticias', no hay categorías, están sobrevaloradas");
}
}    
useEffect(() => {
 consultarCats();
 consultarNews();
},[])


  return (
<Fragment>
  <Router>
    <Navegacion cats={cats}/>
    <Switch>
      <Route exact path="/" >
        <Landing />
      </Route>
      <Route exact path="/categorias/:name" > 
        <Categoria news={news} cats={cats}/>
      </Route>
      <Route exact path="/noticias/:title" > 
        <Detalle news={news}/>
      </Route>
      <Route exact path="/*">
        <Error404/>
      </Route>
    </Switch>
    <Pie/>
  </Router>

</Fragment>    
  );
}

export default App;
