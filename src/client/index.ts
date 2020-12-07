import express from "express";
import { BFFPort } from "../config";
import { sayHello } from "./helloClient";

const app = express();

app.get("/", ({}, res) => {
  res.json({ health: "ok" });
});

app.get("/hello-world", async ({}, res) => {
  try {
    const result = await sayHello();
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(BFFPort, () =>
  console.log(`Express server listening on port ${BFFPort}`)
);
