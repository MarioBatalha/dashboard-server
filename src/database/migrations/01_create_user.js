exports.up = function(knex) {
    return knex.schema.createTable('user', function (table){
      table.string('id').primary();
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.string('email').notNullable();
      table.string('city').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('user');
  };