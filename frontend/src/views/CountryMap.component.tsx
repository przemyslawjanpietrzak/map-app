import { CountryMapProps } from './countryMap.container';

import { CountryMap } from '../components/CountryMap';

export const CountryMapComponent = (props: CountryMapProps) => {
  if (!props.isCountryStatesLoaded) {
    props.fetchCountryState();
  }

  const choises = [
    { min: 0, max: 250 },
    { min: 250, max: 500 },
    { min: 500, max: 1000 },
  ] as Array<{ min: number, max: number }>;
  
  return <div>
    { props.isCountryStatesLoaded && <CountryMap visitedCountryStateDict={props.filterdVisitedCountryStateDict} /> }
    <div >
        { choises.map({ min, max }, index) => <div key={index}>
            <input type="radio" value={min} name="selectedVisited" onClick={() => props.setSelectedVisitedCount({ min, max })} />
            <span>{min} - {max}</span>
          </div>
          );
        }
     
        <input type="radio" value="250" name="selectedVisited" onClick={() => props.setSelectedVisitedCount({ min: 250, max: 500 })} /> 250 - 500
        <input type="radio" value="500" name="selectedVisited" onClick={() => props.setSelectedVisitedCount({ min: 500, max: 1000 })}/> 500 - 1000
        <input type="radio" value="1000" name="selectedVisited" onClick={() => props.setSelectedVisitedCount({ min: 1000, max: Infinity })}/> 1000+
      </div>
  </div>;
}