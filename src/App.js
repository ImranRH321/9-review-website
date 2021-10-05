import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './componets/Header/Header';
import Home from './componets/Home/Home';
import About from './componets/About/About'
import Services from './componets/Services/Services';
import Error from './componets/Error/Error'
import Footer from './componets/Footer/Footer';
import Contact from './componets/Context/Contact';
 


function App() {
  return (
    <div className="App">
    
    
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/contact'>
          <Contact></Contact>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
