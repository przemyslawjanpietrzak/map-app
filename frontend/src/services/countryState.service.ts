import axios from "axios";

export interface CountryState {
    id: string;
    name: string;
    visits: number;
}

export class CountryStateService {
    async getCountryStates(): Promise<Array<CountryState>> {
        const { data } = await axios.get<Array<CountryState>>('/country-states', { headers: {
            'Access-Control-Allow-Origin': '*',
        }});

        return this.parseCountryStates(data);
    }

    private parseCountryStates(countryStates: Array<CountryState>): Array<CountryState> {
        const countryStatesIds = new Set(countryStates.map(({ id }) => id));

       return Array.from(countryStatesIds).map(countryStateId =>
            countryStates
            .filter(({ id }) => id === countryStateId)
            .reduce((acc, countryState) => ({ ...countryState, visits: acc.visits + countryState.visits}) , { visits: 0, name: null, id: null } as unknown as CountryState)            
        );
    }
}

export const countryStateService = new CountryStateService();