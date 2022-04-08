const app = require('../app');
const request = require('supertest');

describe('GET /api/v1/data', () => {
	it('Should return all data in the data file', async () => {
		const response = await request(app).get('/api/v1/data');
		expect(response.statusCode).toEqual(200);
		expect(Array.isArray(response.body).toBeThruthy);
	});
});
