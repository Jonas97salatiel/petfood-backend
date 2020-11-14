
exports.up = function(knex) {

    return knex.schema.createTable('clientes', function(table){

        table.increments('idCliente').primary();
        table.string('cpf', 11);
        table.string('nome', 100);
        table.string('urlImage');

   

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