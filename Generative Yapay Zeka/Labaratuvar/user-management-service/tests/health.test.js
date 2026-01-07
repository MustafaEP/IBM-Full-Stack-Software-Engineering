import { describe, expect, it, afterAll, beforeAll } from "vitest";
process.env.NODE_ENV = "test";
process.env.JWT_SECRET = "test-secret";
let app;
beforeAll(async () => {
    const mod = await import("../src/app.ts");
    app = await mod.createApp();
    await app.ready();
});
afterAll(async () => {
    if (app)
        await app.close();
});
describe("health endpoints", () => {
    it("GET /healthz", async () => {
        const res = await app.inject({ method: "GET", url: "/healthz" });
        expect(res.statusCode).toBe(200);
        expect(res.json()).toEqual({ ok: true });
    });
    it("GET /readyz (no db) => 503", async () => {
        const res = await app.inject({ method: "GET", url: "/readyz" });
        expect(res.statusCode).toBe(503);
    });
});
