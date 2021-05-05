import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react/cjs/react.production.min';
import { BrowserRouter as Router, Switch,  Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/common/Navegacion';
import Landing from './components/pages/Landing';
import Pie from './components/common/Pie';
import Categoria from './components/pages/Categoria';

function App() {
  return (
<Fragment>
  <Router>
    <Navegacion/>
    <Switch>
      <Route exact path="/">
        <Landing/>
      </Route>
      <Route exact path="/categorias">
        <Categoria/>
      </Route>
    </Switch>
    <Pie/>
  </Router>

</Fragment>    
  );
}

export default App;
