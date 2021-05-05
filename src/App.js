import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react/cjs/react.production.min';
import { BrowserRouter as Router, Switch,  Route, Link} from "react-router-dom";
import Navegacion from './components/common/Navegacion';
import Landing from './components/pages/Landing';

function App() {
  return (
<Fragment>
  <Router>
    <Navegacion/>
    <Switch>
      <Route exact path="/">
        <Landing/>
      </Route>
    </Switch>
  </Router>

</Fragment>    
  );
}

export default App;
