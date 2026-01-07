import { env } from "./config/env.js";
import { connectMongo, disconnectMongo } from "./infrastructure/db/mongo.js";
import { createApp } from "./app.js";

async function start() {
  await connectMongo();

  const app = await createApp();

  const close = async () => {
    try {
      await app.close();
    } finally {
      await disconnectMongo();
    }
  };

  process.on("SIGINT", () => void close().finally(() => process.exit(0)));
  process.on("SIGTERM", () => void close().finally(() => process.exit(0)));

  await app.listen({ port: env.PORT, host: env.HOST });
}

start().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});


