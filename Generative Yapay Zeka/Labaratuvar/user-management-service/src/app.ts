import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { env } from "./config/env.js";
import { loggerOptions } from "./config/logger.js";
import { errorHandler } from "./infrastructure/http/errors.js";
import { isMongoReady } from "./infrastructure/db/mongo.js";
import { registerSecurityPlugins } from "./plugins/security.js";
import { registerSwagger } from "./plugins/swagger.js";
import { auth } from "./plugins/auth.js";
import { rbac } from "./plugins/rbac.js";
import { registerRoutes } from "./routes.js";

export async function createApp() {
  const app = fastify({ logger: loggerOptions });

  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);
  app.setErrorHandler(errorHandler);

  await registerSecurityPlugins(app);
  await app.register(auth);
  await app.register(rbac);

  if (env.NODE_ENV !== "production") {
    await registerSwagger(app);
  }

  app.get("/healthz", async () => ({ ok: true }));
  app.get("/readyz", async (request, reply) => {
    if (!isMongoReady()) return reply.status(503).send({ ok: false });
    return { ok: true };
  });

  await registerRoutes(app);

  return app;
}


