import React from 'react';

function Footer(){
  return (
    <div className='footer'>
      <style jsx>{`
          .footer {
            grid-template-columns: 100%;
            grid-template-rows: auto;
            grid-template-areas: footer;
            text-align: center;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 25px;
            color: white;
            background-color: #2ccaef;
            text-align: center;
            opacity: 0.8;
            box-shadow: 0 0 5px black;
            font-size: 16px;
            font-weight: bold;
          }
      `}</style>
    Alexander Neumann @ Epicodus 2018
    </div>
  )
}

export default Footer
