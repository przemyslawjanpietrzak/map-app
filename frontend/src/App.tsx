import React from 'react';
import { Provider } from 'react-redux';

import { rootStore } from './store';

import CountryMapContainer from './views/countryMap.container';

function App() {
  return (
    <Provider store={rootStore}>

    <div className="App">
      <CountryMapContainer />
    </div>
    </Provider>
  );
}

export default App;
