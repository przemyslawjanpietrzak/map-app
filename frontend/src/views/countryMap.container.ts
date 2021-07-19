import { connect } from 'react-redux';

import { RootStore } from '../store';
import { getVisitedCountryStateDict } from '../store/countryState/countryState.selectors';
import { fetchCountryState } from '../store/countryState/countryState.actions';

import { CountryMap } from './CountryMap.component';

interface CountryMapPropsAttrs {
  visitedCountryStateDict: { [key: string]: number } | null;
}

interface CountryMapPropsActions {
  fetchCountryState: typeof fetchCountryState;
}

export type CountryMapProps = CountryMapPropsAttrs & CountryMapPropsActions;

const mapStateToProps = (store: RootStore): CountryMapPropsAttrs => ({
  visitedCountryStateDict: getVisitedCountryStateDict(store),
});

const mapDispatchToProps: CountryMapPropsActions = {
  fetchCountryState,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CountryMap);