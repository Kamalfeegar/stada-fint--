import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';



function LandingPage() {
  return (
    <div>
      <Header/>
      <h1>Vi Städar fint <br/> hemma hos dig!</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
      <input type='text' className='postnummer'/>
      <button>VÄLJTJÄNST</button>

      <button>Gå Vidare</button>
      <Link to={'./BookingPage'}>Dina bokade städningar</Link>
      

    </div>
  );
}

export default LandingPage