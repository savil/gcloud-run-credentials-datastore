'use strict';

const express = require("express");
const {Datastore} = require("@google-cloud/datastore");

function main() {
  mainAsync().catch(err => console.log("something went wrong", err));
}

async function mainAsync() {
  const app = express();
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log("hello world, listening on port ", port);
  });

  const datastore = new Datastore();
  const query = datastore
    .createQuery("kovan", "CDP")
    .limit(5);

  const [tasks] = await datastore.runQuery(query);
  console.log(tasks);
}

main();
