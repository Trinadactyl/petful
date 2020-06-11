import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import landingPic from './dogncat.jpg';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <img id='landingPic' src={landingPic} alt='a cute image of a kitten and a puppy.' />
        <p className='siteDesc'>
          Welcome to Petful, an online pet adoption service for dogs and cats. Our adoption policy works on a strictly
          "first in, first out" basis where you may adopt either a dog, a cat, or both, with the only stipulation being
          that you can only adopt the animal that came to the shelter first. If you would like to begin the process and
          put yourself on the adoption queue, please click the button below!
        </p>
        <br />
        <Link to='/AdoptionPage'>
          <button id='startButton'>Begin</button>
        </Link>
      </div>
    );
  }
}
