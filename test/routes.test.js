const request = require('supertest')
const app = require('../src/server')
describe('Post Endpoints', () => {
    it('should get the data', async () => {
        const res = await request(app)
            .post('/api/records')
            .send({
                "startDate": "2018-12-08",
                "endDate": "2018-02-02",
                "minCount": 2600,
                "maxCount": 3000
            });
        console.log('res post', res.body)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('code')
        expect(res.body).toHaveProperty('msg')
        expect(res.body).toHaveProperty('records')
    });

    it('should throw bad request with 400 due to invalid input', async () => {
        const res = await request(app)
            .post('/api/records')
            .send({
                "startDate1": "2018-12-08",
                "endDate": "2018-02-02",
                "minCount": 2600,
                "maxCount": 3000
            });
        console.log('res post', res.body)
        expect(res.statusCode).toEqual(400)
    });
})