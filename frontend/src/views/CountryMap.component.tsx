import { CountryMapProps } from './countryMap.container';

import { CountryMap } from '../components/CountryMap';

export const CountryMapComponent = (props: CountryMapProps) => {
  if (!props.isCountryStatesLoaded) {
    props.fetchCountryState();
  }
  
  return <div>
    { props.isCountryStatesLoaded && <CountryMap visitedCountryStateDict={props.filterdVisitedCountryStateDict} /> }
    <div >
        <input type="radio" value="0" name="selectedVisited" onClick={() => props.setSelectedVisitedCount({ min: 0, max: 250 })} /> 0 - 250
        <input type="radio" value="250" name="selectedVisited" onClick={() => props.setSelectedVisitedCount({ min: 250, max: 500 })} /> 250 - 500
        <input type="radio" value="500" name="selectedVisited" onClick={() => props.setSelectedVisitedCount({ min: 500, max: 1000 })}/> 500 - 1000
        <input type="radio" value="1000" name="selectedVisited" onClick={() => props.setSelectedVisitedCount({ min: 1000, max: Infinity })}/> 1000+
      </div>
  </div>;
}