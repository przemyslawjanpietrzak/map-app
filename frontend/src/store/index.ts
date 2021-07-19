
import { createStore, combineReducers } from 'redux';

import { countryStateReducer, CountryStateStore } from './countryState/countryState.reducers';

export interface RootStore {
  countryState: CountryStateStore;
}

const rootReducer = combineReducers({
  countryState: countryStateReducer,
});

export const rootStore = createStore(
  rootReducer,
  // @ts-ignore
  window['__REDUX_DEVTOOLS_EXTENSION__'],
);