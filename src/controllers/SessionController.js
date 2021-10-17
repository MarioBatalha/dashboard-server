const connection = require('../database/connection');

module.exports = {
  async create(req, res){
    const { email, password } = req.body;

    const user = await connection('user')
    .where('email',  email)
    .andWhere('password', password)
    .select('username')
    .first();

    if (!user) {
      return res.status(400).json({ error: 'There is no user here with this ID :('})
    }
    return res.json(user);
  }
}