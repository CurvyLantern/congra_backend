import app from "./app";
import { SAT_NAMES } from "../db/SAT_NAMES";
import { TLE } from "../db/TLE2";
import env from "@fastify/env";
import EnvOptions from "./plugins/env";
import cors from "@fastify/cors";

const start = async () => {
  try {
    await app
      .register(env, EnvOptions)
      .register(cors, {
        origin: "*",
      })
      .after();

    app.get("/", (req, res) => {
      return { hello: "world" };
    });

    app.get("/v1/tle", async (req, res) => {
      return TLE;
    });
    app.get("/v1/info/satellite", async (req, res) => {
      return SAT_NAMES;
    });

    //@ts-ignore
    await app.listen({ port: app.config.PORT });

    const address = app.server.address();
    const port = typeof address === "string" ? address : address?.port;
    console.log(`server listening at ${JSON.stringify(address)}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
