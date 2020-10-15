
exports.up = function(knex) {

    return knex.schema.createTable('clientes', function(table){

        table.increments('idCliente').primary();
        table.integer('cpf', 11);
   

        //relacionamento
        table.integer('userId')
            .references('usuarios.id')
            .notNullable()
            .onDelete('CASCADE')

        table.timestamps(true, true);

    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('clientes');

};