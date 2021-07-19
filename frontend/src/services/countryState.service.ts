import axios from "axios";

export interface CountryState {
    id: string;
    name: string;
    visits: number;
}

export class CountryStateService {
    async getCountryStates(): Promise<Array<CountryState>> {
        const { data } = await axios.get<Array<CountryState>>('/countryState');

        return data;
    }
}