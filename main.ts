const nodeFetch = require("node-fetch");
const _ = require("lodash");

interface APIResponse {
  drugs: string;
  dosages: string;
  patients: string;
  time: number;
}

async function main() {
  const data = (await nodeFetch("http://localhost:7200/data").then((x) =>
    x.json()
  )) as APIResponse;

  console.log(data);

  return data;
}

main();
