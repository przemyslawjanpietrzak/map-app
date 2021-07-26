import { CountryState } from "../../services/countryState.service";
import { CountryStateActions, CountryStateActionTypes } from "./countryState.actions";

export interface CountryStateStore {
  isLoading: boolean;
  error: Error | null;
  countryStates: Array<CountryState> | null;
  selectedMinVisitsCount: number,
  selectedMaxVisitsCount: number,
}

const defaultState: CountryStateStore = {
  isLoading: false,
  error: null,
  countryStates: null,
  selectedMinVisitsCount: 0,
  selectedMaxVisitsCount: 0,
};

export const countryStateReducer = (state = defaultState, action: CountryStateActions): CountryStateStore => {
  if (action.type === CountryStateActionTypes.FetchCountryState) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === CountryStateActionTypes.LoadCountryState) {
    return {
      ...state,
      isLoading: false,
      countryStates: action.payload,
    };
  }
  if (action.type === CountryStateActionTypes.ErrorCountryState) {
    return {
      ...state,
      countryStates: null,
      error: action.payload,
      isLoading: false,
    };
  }
  if (action.type === CountryStateActionTypes.SetSelectedVisitedCount) {
    return {
      ...state,
      selectedMinVisitsCount: action.payload.min,
      selectedMaxVisitsCount: action.payload.max,
    };
  }

  return state;
};