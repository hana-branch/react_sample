import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App'
import Nav from './components/Nav';
import Colors from './components/colors/Index';
import Red from './components/colors/Red';
import Blue from './components/colors/Blue';

const Routes = () => {
  return (
    <div className="ui container">
      <Router>
        <div className="ui container">
          <Nav />
          <main className="ui main text container">
            <Route path="/" exact component={App} />
            <Switch>
              <Route path="/colors" exact component={Colors} />
              <Route path="/colors/red" exact component={Red} />
              <Route path="/colors/blue" exact component={Blue} />
            </Switch>
          </main>
        </div>
      </Router>
    </div>    
  );
}

export default Routes;