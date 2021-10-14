const generateUniqueId = require('../utils/GenerateUniqueId');
const connection = require('../database/connection');

module.exports = {
  async index (req, res) {
    const admin = await connection('admin').select('*');
  
    return res.json(admin);
  },

  async create(req, res) {
    const { fullname, password, email, city, position } = req.body;

    const id = generateUniqueId();

    await connection('user').insert({
      id,
      fullname,
      password,
      email,
      city,
      position,
    })

    return res.json({ id })
  }
}
