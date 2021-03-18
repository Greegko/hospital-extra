// @ts-ignore
const express = require('express');
const app = express();
const port = 7200;

const MIN_DRUGS_INSTANCES = 10;
const NUMBER_DRUGS_INSTANCES = 25;
const MIN_PATIENTS_INSTANCES = 25;
const NUMBER_PATIENTS_INSTANCES = 100;

const MIN_DOSAGE = 10;
const MAX_DOSAGE = 250;
const DOSAGE_STEP = 10;

const patients = ['F', 'X', 'T', 'D', 'H'];
const drugs = ['As', 'An', 'I', 'P'];

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

function createArray(size: number): number[] {
  return (new Array(size) as any).fill(0);
}

function puttingSpace(value: string | number) {
  if(Math.random() > 0.9) {
    return `  ${value}  `;
  }

  return value;
}

function createData() {
  const numberOfDrugs = ~~(Math.random() * NUMBER_DRUGS_INSTANCES) + MIN_DRUGS_INSTANCES;
  const patientsNumber = ~~(Math.random() * NUMBER_PATIENTS_INSTANCES) + MIN_PATIENTS_INSTANCES;

  return {
    drugs: createArray(numberOfDrugs).map(() => drugs[~~(Math.random() * drugs.length)]).map(puttingSpace).join(','),
    dosages: createArray(numberOfDrugs).map(() => (~~(Math.random() * MAX_DOSAGE) + MIN_DOSAGE) * DOSAGE_STEP).map(puttingSpace).join(','),
    patients: createArray(patientsNumber).map(() => patients[~~(Math.random() * patients.length)]).map(puttingSpace).join(','), 
    time: new Date().getTime(),
  };
}

app.get('/data', (req,res) => {
  res.json(createData());
});

app.listen(port, () => console.log(`Hospital Backend listening on port ${port}!`));
