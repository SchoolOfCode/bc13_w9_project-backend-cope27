import express from "express"
import { createPost, getAllPosts } from "../models/index.js"
const router = express.Router()
import supertest from 'supertest';
import { test, describe, expect, beforeEach, afterAll, beforeAll, afterEach } from '@jest/globals'
import app from '../app.js';

/**
 * Integration testing for Sjardin
 * 
 * We need a 
 */


describe('GET payload tests', () => {
    test('to get everything from the posts table', async () => {
        const response = await supertest(app).get('/api/posts');
        expect(response.status).toBe(200);
    });
    
    it('to make sure the body from the get response contains an array of elements', async () => {
        const response = await supertest(app).get('/api/posts');
        expect(response.body).toStrictEqual(
            {
                success: true,
                payload: expect.any(Array),
            }
        );
    })


})
