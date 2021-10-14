exports.up = function(knex) {
    return knex.schema.createTable('admin', function (table){
      table.string('id').primary();
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.string('email').notNullable();
      table.string('city').notNullable();
      table.string('position').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('user');
  };