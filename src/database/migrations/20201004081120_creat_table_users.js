
exports.up = function(knex) {
  
    return knex.schema.createTable('usuarios', function(table){
        table.increments('id').primary();
        table.string('nome', 200);
        table.string('email', 200);
        table.string('senha', 30);
        table.string('telefone', 20);

        table.timestamp('dataCadastro').defaultTo(knex.fn.now());
        table.timestamp('dataUpdate').defaultTo(knex.fn.now());

        


    })
};

exports.down = function(knex) {
  
    return knex.schema.dropTable('usuarios');

};
