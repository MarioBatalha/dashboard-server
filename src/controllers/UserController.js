const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
  async index (req, res) {
    const user = await connection('user').select('*');
  
    return res.json(user);
  },

  async create(req, res) {
    const { fullname, password, email, city } = req.body;

    const id = generateUniqueId();

    await connection('user').insert({
      id,
      fullname,
      password,
      email,
      city,
    })

    return res.json({ id })
  }
}
