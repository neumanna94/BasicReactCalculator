import React from 'react';
import { Link } from 'react-router-dom';
function Header(){
  return (
    <div className='header'>
      <style jsx>{`
          .header {
            grid-template-columns: 100%;
            grid-template-rows: auto;
            text-align: center;
            position: relative;
            width: 100%;
            height: 100px;
            color: white;
            background-color: #2ccaef;
            text-align: center;
            opacity: 0.8;
            box-shadow: 0 0 5px black;
            font-size: 16px;
            font-weight: bold;
          }
          .header ul li {
            list-style: none;
            float: left;
            margin-left: 25%;
          }
          .header ul li a {
            text-decoration: none;
          }
      `}</style>
    <h1> Simple Calculator in React </h1>
    <ul>
      <li><Link to="/">Calculator</Link></li>
      <li><Link to="/History"> Calculation History </Link></li>
    </ul>
    </div>
  )
}

export default Header;
