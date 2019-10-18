const request = require("supertest");
const db = require("../database/dbConfig.js");
const server = require("../api/server");

describe("auth-router.js", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("POST to /api/auth/register", () => {
    it("responds with 201 OK", async done => {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "student", password: "pa$$word" })
        .expect(201);

      done();
    });

    it("responds with JSON", async done => {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "testing", password: "testing" })
        .expect("Content-Type", /json/i);

      done();
    });
  });

  describe("POST  to /api/auth/login", () => {
    it("responds with 200 OK", async done => {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "student", password: "pa$$word" });

      request(server)
        .post("/api/auth/login")
        .send({ username: "one", password: "two" })
        .expect(200);

      done();
    });

    it("responds with JSON", async done => {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "student", password: "pa$$word" });

      request(server)
        .post("/api/auth/login")
        .send({ username: "three", password: "four" })
        .expect("Content-Type", /json/i);

      done();
    });
  });
});
