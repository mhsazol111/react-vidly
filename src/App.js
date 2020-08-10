import React from 'react';
import './App.css';
import Movies from './components/movies';
import Header from './components/header';
import { Switch, Route, Redirect } from 'react-router-dom';
import Customers from './components/customers';
import Rentals from './components/rentals';
import Home from './components/home';
import NotFound from './components/404';
import MoviesDetails from './components/movies-details';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main pt-5'>
        <div className='container'>
          <Switch>
            <Route path='/movies/:id' component={MoviesDetails} />
            <Route path='/movies' component={Movies} />

            <Route path='/customers' component={Customers} />
            <Route path='/rentals' component={Rentals} />

            {/* <Redirect from='/' to='/movies' /> */}
            <Route path='/404' component={NotFound} />
            <Route path='/' exact component={Home} />

            <Redirect to='/404' />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
