import express from 'express';

import { countryStateService } from './countryState.service';

const app = express();
const PORT = 8000;

app.get('/', (_, res) => {
    const data = countryStateService.getStates();
    res.send('Express + TypeScript Server')
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});