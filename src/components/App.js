import { BrowserRouter, Route,Switch } from 'react-router-dom';
import './styles/App.css';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound.js';
import Layout from './Layout';
import Home from '../pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route component={NotFound} />
      </Switch>
      </Layout>
    </BrowserRouter>
    
  );
}

export default App;
