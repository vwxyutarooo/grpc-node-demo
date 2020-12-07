import express from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { BFFPort } from "../config";
import { RequestParams, sayHello } from "./helloClient";

const app = express();

app.get("/", ({}, res) => {
  res.json({ health: "ok" });
});

app.get<ParamsDictionary, any, any, RequestParams>(
  "/hello-world",
  async (request, response) => {
    const { name } = request.query;

    try {
      const result = await sayHello({ name });
      response.json({ result });
    } catch (error) {
      response.status(500).json({ error });
    }
  }
);

app.listen(BFFPort, () =>
  console.log(`Express server listening on port ${BFFPort}`)
);
