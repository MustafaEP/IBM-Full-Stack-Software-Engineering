import type { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import mongoose from "mongoose";

export class HttpError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public code?: string
  ) {
    super(message);
  }
}

export function errorHandler(
  err: FastifyError | Error,
  request: FastifyRequest,
  reply: FastifyReply
): void {
  request.log.error({ err }, "request_error");

  if (err instanceof HttpError) {
    void reply.status(err.statusCode).send({
      error: err.code ?? "http_error",
      message: err.message
    });
    return;
  }

  if (err instanceof mongoose.Error.ValidationError) {
    void reply.status(400).send({ error: "validation_error", message: err.message });
    return;
  }

  // Duplicate key (e.g. unique email)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anyErr = err as any;
  if (anyErr?.code === 11000) {
    void reply.status(409).send({ error: "conflict", message: "Resource already exists." });
    return;
  }

  void reply.status(500).send({ error: "internal_error", message: "Internal server error." });
}


