const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection('product').count();

    const product = await connection('product')
    .join('user', 'user_id', '=', 'product.user_id')
    .limit(5)
    .offset((page -1) * 5)
    .select([
      'product.*',       
      'user.fullname', 
      'user.password',
      'user.email',
      'user.city',
    ]);

    res.header('X-Total-Count', count['count(*)']);

    return res.json(product);
  },

  async create(req, res) {
    const { title, price, qtd, description } = req.body;
    const user_id = req.headers.authorization;

    const [id] = await connection('product').insert({
      title, 
      price,
      qtd,
      description,
      user_id,
    });
    return res.json({ id });
    
  },

  async delete(req, res){
    const { id } = req.params;
    const user_id = req.headers.authorization;

    const product = await connection('product')
    .where('id', id)
    .select('user_id')
    .first();

    if (product.user_id !== user_id) {
      return res.status(401).json({ error: 'Operation not permitted.'})
    }
    await connection('product').where('id', id).delete();
    return res.status(204).send();
  }
}