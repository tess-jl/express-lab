require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Attempt = require('../lib/models/Attempt');

describe('attempt routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates an attempt', () => {
    return request(app)
      .post('/api/v1/attempts')
      .send({
        recipeId: 232, 
        dateOfEvent: 20191210,  
        notes: 'good recipe',
        rating: 9
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          recipeId: 232, 
          dateOfEvent: expect.any(String),  
          notes: 'good recipe',
          rating: 9,
          __v: 0
        });
      });
  });

  it('gets all attempts', async() => {
    const attempts = await Attempt.create([
      { recipeId: 232, dateOfEvent: 20191210, notes: 'good recipe', rating: 9 },
      { recipeId: 233, dateOfEvent: 20191210, notes: 'good recipe', rating: 9 },
      { recipeId: 234, dateOfEvent: 20191210, notes: 'good recipe', rating: 9 },
    ]);
    return request(app)
      .get('/api/v1/attempts')
      .then(res => {
        attempts.forEach(attempt => {
          expect(res.body).toContainEqual({
            _id: expect.any(String),
            recipeId: attempt.recipeId, 
            dateOfEvent: expect.any(String),  
            notes: attempt.notes,
            rating: attempt.rating,
            __v: 0
          });
        });
      });
  });

  it('gets an attempt by id', async() => {
    const attempt = await Attempt.create({ 
      recipeId: 232, 
      dateOfEvent: 20191210,  
      notes: 'good recipe',
      rating: 9
    });
    return request(app)
      .get(`/api/v1/attempts/${attempt._id}`)
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          recipeId: 232, 
          dateOfEvent: expect.any(String),  
          notes: 'good recipe',
          rating: 9,
          __v: 0
        });
      });
  });

  it('updates an attempt by id', async() => {
    const attempt = await Attempt.create({
      recipeId: 232, 
      dateOfEvent: 20191210,  
      notes: 'good recipe',
      rating: 9
    });
    return request(app)
      .patch(`/api/v1/attempts/${attempt._id}`)
      .send({ rating: 2 })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          recipeId: 232, 
          dateOfEvent: expect.any(String),  
          notes: 'good recipe',
          rating: 2,
          __v: 0
        });
      });
  });

  // it('deletes a recipe by id', async() => {
  //   const recipe = await Recipe.create({
  //     name: 'good cookies',
  //     ingredients: [],
  //     directions: [
  //       'preheat oven to 375',
  //       'mix ingredients',
  //       'put dough on cookie sheet',
  //       'bake for 10 minutes'
  //     ],
  //   });

  //   return request(app)
  //     .delete(`/api/v1/attempts/${recipe._id}`)
  //     .send({ name: 'good cookies' })
  //     .then(res => {
  //       expect(res.body).toEqual({
  //         _id: expect.any(String),
  //         name: 'good cookies',
  //         ingredients: [],
  //         directions: [
  //           'preheat oven to 375',
  //           'mix ingredients',
  //           'put dough on cookie sheet',
  //           'bake for 10 minutes'
  //         ],
  //         __v: 0
  //       });
  //     });
  // });
});
