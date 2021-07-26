import express from 'express';

import { countryStateService } from './countryState.service';

const app = express();
const PORT = 8000;

app.get('/country-states', (_, res) => {
    const data = countryStateService.getStates();
    res.send(data);
});

app.use(express.static('build'))

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});