const request = require('supertest');
const app = require('../../src/app');

describe('ONG', () => {
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "teste",
            email: "teste@55pbx",
            whatsapp: "1195959595",
            city: "Morato",
            uf: "SP"
        });
        console.log(response.body );
    });
});