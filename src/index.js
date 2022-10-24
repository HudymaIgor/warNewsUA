import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const unirest = require('unirest');
unirest.get('https://dp.informator.ua/uk/shcho-mozhut-zvesti-zamist-dovgobudu-na-peremozi-u-dnipri').end(function(response){
   const bady= response.bady;  
   const $ = cheerio.load(bady);

   
});