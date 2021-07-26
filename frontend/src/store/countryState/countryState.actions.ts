import { CountryState } from "../../services/countryState.service";

export enum CountryStateActionTypes {
  FetchCountryState = '[CountryState] Fetch Country States',
  LoadCountryState = '[CountryState] Load Country States',
  ErrorCountryState = '[CountryState] Error Country States',
  SetSelectedVisitedCount = '[CountryState] Set Selected Visited Count',
}

export const fetchCountryState = () => ({
  type: CountryStateActionTypes.FetchCountryState,
  payload: null,
} as const);
export type FetchCountryState = ReturnType<typeof fetchCountryState>;

export const loadCountryState = (payload: Array<CountryState>) => ({
  type: CountryStateActionTypes.LoadCountryState,
  payload,
} as const);
export type LoadCountryState = ReturnType<typeof loadCountryState>;

export const errorCountryState = () => ({
  type: CountryStateActionTypes.ErrorCountryState,
  payload: null,
} as const);
export type ErrorCountryState = ReturnType<typeof errorCountryState>;

export const setSelectedVisitedCount = (payload: { min: number, max: number }) => ({
  type: CountryStateActionTypes.SetSelectedVisitedCount,
  payload,
} as const);
export type SetSelectedVisitedCount = ReturnType<typeof setSelectedVisitedCount>;

export type CountryStateActions = FetchCountryState | LoadCountryState | ErrorCountryState | SetSelectedVisitedCount