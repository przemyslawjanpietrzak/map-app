import React from 'react';
import { Provider } from 'react-redux';

import { rootStore } from './store';

import CountryMapContainer from './views/countryMap.container';

import logo from './logo.svg';

function App() {
  return (
    <Provider store={rootStore}>

    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CountryMapContainer />
    </div>
    </Provider>
  );
}

export default App;
