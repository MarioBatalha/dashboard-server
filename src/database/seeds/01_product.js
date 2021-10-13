const knex = require('knex');

exports.seed = function(knex) {
     knex('product').insert([
        {title: 'Keyboard', price: 27.000, qtd: 1, description: 'Keyboard gamer com led'},
        {title: 'Suporte de monitor', price: 90.670, qtd: 1, description: 'Suporte de monitor duplo de 1m de altura'}
    ])
}