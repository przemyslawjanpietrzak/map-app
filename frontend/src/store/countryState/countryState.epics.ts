import { ofType, Epic } from 'redux-observable';
import { from } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { RootStore } from '..';
import { countryStateService } from '../../services/countryState.service';
import { CountryStateActionTypes, CountryStateActions, FetchCountryState, loadCountryState } from './countryState.actions';

const fetchCountryStateEpic: Epic<CountryStateActions, any, RootStore> = actions$ =>
  actions$.pipe(
    ofType(CountryStateActionTypes.FetchCountryState),
    switchMap(() =>
      from(countryStateService.getCountryStates()).pipe(
        map(result => loadCountryState(result))
      ))
  );

export const countryStateEpics = [fetchCountryStateEpic];