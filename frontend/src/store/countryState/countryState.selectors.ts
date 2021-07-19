import { RootStore } from '../index';

export const getVisitedCountryStateDict = ({ countryState }: RootStore): { [key: string]: number } | null => {
    if (countryState.countryStates === null) {
        return null;
    }

    return Object.fromEntries(
        countryState.countryStates.map(({ id, visits }) => [id, visits])
    );
}