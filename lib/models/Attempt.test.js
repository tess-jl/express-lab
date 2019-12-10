const mongoose = require('mongoose');
const Attempt = require('./Attempt');

describe('Attempt model', () => {
  describe('recipeId field tests', () => {
    it('has a required recipeId', () => {
      const attempt = new Attempt({
        dateOfEvent: 20191210, 
        notes: 'good recipe', 
        rating: 9
      });
      const { errors } = attempt.validateSync();
      expect(errors.recipeId.message).toEqual('Path `recipeId` is required.');
    });
  });

  describe('dateOfEvent field tests', () => {
    it('has a required dateOfEvent', () => {
      const attempt = new Attempt({
        recipeId: 232, 
        notes: 'good recipe', 
        rating: 9
      });
      const { errors } = attempt.validateSync();
      expect(errors.dateOfEvent.message).toEqual('Path `dateOfEvent` is required.');
    });
  });

  describe('notes field tests', () => {
    it('has a required notes field', () => {
      const attempt = new Attempt({
        recipeId: 232, 
        dateOfEvent: 20191210,  
        rating: 9
      });
      const { errors } = attempt.validateSync();
      expect(errors.notes.message).toEqual('Path `notes` is required.');
    });
  });

  describe('rating field tests', () => {
    it('has a required rating field', () => {
      const attempt = new Attempt({
        recipeId: 232, 
        dateOfEvent: 20191210,  
        notes: 'good recipe',
      });
      const { errors } = attempt.validateSync();
      expect(errors.rating.message).toEqual('Path `rating` is required.');
    });
    it('has a rating that is at least 0', () => {
      const attempt = new Attempt({
        recipeId: 232, 
        dateOfEvent: 20191210,  
        notes: 'good recipe',
        rating: -1
      });
      const { errors } = attempt.validateSync();
      expect(errors.rating.message).toEqual('Path `rating` (-1) is less than minimum allowed value (0).');
    });
    it('has a rating that is at most 10', () => {
      const attempt = new Attempt({
        recipeId: 232, 
        dateOfEvent: 20191210,  
        notes: 'good recipe',
        rating: 11
      });
      const { errors } = attempt.validateSync();
      expect(errors.rating.message).toEqual('Path `rating` (11) is more than maximum allowed value (10).');
    });
  });

  it('has all fields', () => {
    const attempt = new Attempt({
      recipeId: 232, 
      dateOfEvent: 20191210,  
      notes: 'good recipe',
      rating: 9
    });

    expect(attempt.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      recipeId: 232, 
      dateOfEvent: expect.any(Date),  
      notes: 'good recipe',
      rating: 9
    });
  });
});
