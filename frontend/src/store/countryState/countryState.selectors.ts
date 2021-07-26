import { RootStore } from '../index';

export const getVisitedCountryStateDict = ({ countryState }: RootStore): { [key: string]: number } | null => {
    if (countryState.countryStates === null) {
        return null;
    }

    return Object.fromEntries(
        countryState.countryStates.map(({ id, visits }) => [id.toLocaleLowerCase(), visits])
    );
}

export const getFilterdVisitedCountryStateDict = ({ countryState }: RootStore): { [key: string]: number} | null => {
    const visitedCountryStateDict = getVisitedCountryStateDict({ countryState });
    if (visitedCountryStateDict === null) {
        return null;
    }

    return Object.fromEntries(
        Object.entries(visitedCountryStateDict).filter(([_, visits]) => visits > countryState.selectedMinVisitsCount && visits < countryState.selectedMaxVisitsCount)
    );
}

export const selectedVisitsCount = ({ countryState }: RootStore): string => {
  return `min: ${countryState.selectedMinVisitsCount} max: ${countryState.selectedMaxVisitsCount}`;
}

export const isCountryStatesLoaded = ({ countryState }: RootStore): boolean => {
    return countryState.countryStates !== null;
}