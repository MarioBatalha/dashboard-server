const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('user', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  })

  afterAll(async() => {
    await connection.destroy();
  })
  it('should be abble to create a new user', async () => {
    const response = await request(app)
    .post('/user')
    .send({
      fullname: "Mário Batalha",
      password: "ma1990",
      email: "contato@mario.com",
      city: "Luanda",
    })
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  })
})