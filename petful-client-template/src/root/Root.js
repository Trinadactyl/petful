import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../Components/LandingPage/LandingPage';
import Header from '../Components/Header/Header';
import AdoptionPage from '../Components/AdoptionPage/AdoptionPage';

export class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/AdoptionPage' component={AdoptionPage} />
      </BrowserRouter>
    );
  }
}

export default Root;
