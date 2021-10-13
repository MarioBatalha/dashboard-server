const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('admin', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  })

  afterAll(async() => {
    await connection.destroy();
  })
  it('should be abble to create a new admin', async () => {
    const response = await request(app)
    .post('/admin')
    .send({
      fullname: "Amilton Silva",
      email: "contato@vinicio.com.br",
      password: '1234',
      city: "Benfica",
      position: "CTO",
    })
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  })
})