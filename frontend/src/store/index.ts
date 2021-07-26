import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import { CountryStateActions } from './countryState/countryState.actions';
import { countryStateEpics } from './countryState/countryState.epics';

import { countryStateReducer, CountryStateStore } from './countryState/countryState.reducers';

export interface RootStore {
  countryState: CountryStateStore;
}

export const rootEpic = combineEpics(
  ...countryStateEpics,
);

const rootReducer = combineReducers({
  countryState: countryStateReducer,
});

const epicMiddleware = createEpicMiddleware<CountryStateActions, CountryStateActions, RootStore>({});

export const rootStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(epicMiddleware),
    // @ts-ignore
    window['__REDUX_DEVTOOLS_EXTENSION__'] ? window['__REDUX_DEVTOOLS_EXTENSION__']() : <T>(f: T) => f,
  ),
);

epicMiddleware.run(rootEpic);
