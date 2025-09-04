import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App'
import Nav from './components/Nav';
import Colors from './components/colors/Index';
import Red from './components/colors/Red';
import Blue from './components/colors/Blue';

const AppRoutes = () => {
  return (
    <div className="ui container">
      <Router>
        <div className="ui container">
          <Nav />
          <main className="ui main text container" style={{padding: '10px'}}>
            <Routes>
              <Route path="/" exact element={<App />}  />
              <Route path="/title/tt2394876" exact element={<Colors />} />
              {/* <Route path="/colors/red" element={<Red />} /> */}
              {/* <Route path="/colors/blue" element={<Blue />} /> */}
            </Routes>
          </main>
        </div>
      </Router>
    </div>    
  );
}

export default AppRoutes;