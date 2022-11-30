import supertest from "supertest";
import { test, describe, expect } from "@jest/globals";
import app from "../app.js";

/**
 * Integration testing for Sjardin
 *
 * Tests currently for GET/ POST
 * Stretch goal- delete and update test suites to include in test suite
 */

describe("GET payload tests", () => {
  test("to get everything from the posts table", async () => {
    const response = await supertest(app).get("/api/posts");
    expect(response.status).toBe(200);
  });

  it("to make sure the body from the get response contains an array of elements", async () => {
    const response = await supertest(app).get("/api/posts");
    expect(response.body).toStrictEqual({
      success: true,
      payload: expect.any(Array),
    });
  });

  test.skip("to GET posts and see data is accurate within fields", async () => {
    const response = await supertest(app).get("/api/posts");
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
      success: true,
      payload: expect.any(Array),
    });
    for (let i = 0; i < response.body.payload.length; i++) {
      const postObject = response.body.payload[i];
      expect(postObject).toStrictEqual({
        id: expect.any(Number),
        username: expect.any(String),
        projectgoal: expect.any(String),
        projecttype: expect.any(String),
        projecttools: expect.any(String),
        collaborators: expect.any(Number),
      });
    }
  });
});

describe("Creating a post, and posting to database", () => {
  it("It posts to the projectboard database", async () => {
    const response = await supertest(app).post("/api/posts").send({
      username: "Test Poster",
      projectgoal: "Write a test to test all the tests",
      projecttype: "Build",
      projecttools: "Express",
      collaborators: "2",
    });
    expect(response.status).toBe(201);
  });

  it("Creates the correct object as a valid post response", async () => {
    const response = await supertest(app).post("/api/posts").send({
      username: "Test Poster",
      projectgoal: "Write a test to test all the tests",
      projecttype: "Build",
      projecttools: "Express",
      collaborators: "2",
    });
    expect(response.status).toBe(201);
    expect(response.body).toStrictEqual({
      success: true,
      payload: {
        id: expect.any(Number),
        username: expect.any(String),
        projectgoal: expect.any(String),
        projecttype: expect.any(String),
        projecttools: expect.any(String),
        collaborators: expect.any(Number),
      },
    });
  });
});
