import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/card">APP Rick and Morty</Link>
          </li>
          <li>
            <Link to="/reddit">APP Reddit</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;