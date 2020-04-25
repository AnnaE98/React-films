import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styles from './App.module.css'
import FilmGrid from '../FilmGrid/FilmGrid';
import SingleFilm from '../SingleFilm/SingleFilm';
import AddFilm from '../AddFilm/AddFilm';
import EditFilm from '../EditFilm/EditFilm';



const App = () => (
  <div className={styles.Container}>
    <Router>
      <Switch>
        <Route exact path="/" render={props => <FilmGrid {...props} category="all" />} />
        <Route path="/boevik" render={props => <FilmGrid {...props} category="boevik" />} />
        <Route path="/drama" render={props => <FilmGrid {...props} category="drama" />} />
        <Route path="/komedia" render={props => <FilmGrid {...props} category="komedia" />} />
        <Route path="/deaded" render={props => <FilmGrid {...props} category="deaded" />} />
        <Route path="/fantace" render={props => <FilmGrid {...props} category="fantace" />} />
        <Route exact path="/films" render={props => <FilmGrid {...props} category="all" />} />
        <Route path="/films/:slug/edit" component={EditFilm} />
        <Route path="/films/:slug" component={SingleFilm} />
        <Route path="/add" component={AddFilm} />
        <Route render={() => <h1>404 Not Found</h1>} />
      </Switch>
    </Router>
  </div>
);

export default App;
