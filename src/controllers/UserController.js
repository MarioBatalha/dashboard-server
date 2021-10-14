const generateUniqueId = require('../utils/GenerateUniqueId');
const connection = require('../database/connection');

module.exports = {
  async index (req, res) {
    const user = await connection('user').select('*');
  
    return res.json(user);
  },

  async create(req, res) {
    const { username, password, email, city } = req.body;

    const id = generateUniqueId();

    await connection('user').insert({
      id,
      username,
      password,
      email,
      city,
    })

    return res.json('User registered')
  }
}
