import { connect } from 'react-redux';

import { RootStore } from '../store';
import { getFilterdVisitedCountryStateDict, isCountryStatesLoaded } from '../store/countryState/countryState.selectors';
import { fetchCountryState, setSelectedVisitedCount } from '../store/countryState/countryState.actions';

import { CountryMapComponent } from './CountryMap.component';

interface CountryMapPropsAttrs {
  filterdVisitedCountryStateDict: any;
  isCountryStatesLoaded: boolean;
}

interface CountryMapPropsActions {
  fetchCountryState: typeof fetchCountryState;
  setSelectedVisitedCount: typeof setSelectedVisitedCount;
}

export type CountryMapProps = CountryMapPropsAttrs & CountryMapPropsActions;

const mapStateToProps = (store: RootStore): CountryMapPropsAttrs => ({
  filterdVisitedCountryStateDict: getFilterdVisitedCountryStateDict(store),
  isCountryStatesLoaded: isCountryStatesLoaded(store),
});

const mapDispatchToProps: CountryMapPropsActions = {
  fetchCountryState,
  setSelectedVisitedCount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryMapComponent);