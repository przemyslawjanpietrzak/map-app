import { CountryState } from "../../services/countryState.service";

export enum CountryStateActionTypes {
  FetchCountryState = '[CountryState] Fetch Country States',
  LoadCountryState = '[CountryState] Load Country States',
  ErrorCountryState = '[CountryState] Error Country States',
}

export const fetchCountryState = () => ({
  type: CountryStateActionTypes.FetchCountryState,
  payload: null,
} as const);

export const loadCountryState = (payload: Array<CountryState>) => ({
  type: CountryStateActionTypes.LoadCountryState,
  payload,
} as const);

export const errorCountryState = () => ({
  type: CountryStateActionTypes.ErrorCountryState,
  payload: null,
} as const);

export type CountryStateActions = ReturnType<typeof fetchCountryState>
 | ReturnType<typeof loadCountryState>
 | ReturnType<typeof errorCountryState>;