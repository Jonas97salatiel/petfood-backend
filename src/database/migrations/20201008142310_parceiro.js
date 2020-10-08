
exports.up = function(knex) {

    return knex.schema.createTable('parceiro', function(table){

        table.increments('idPareiro').primary();
        table.string('razaoSocial', 50);
        table.integer('cnpj', 50);
        table.integer('inscricaoEstadual', 10);
        table.string('telefone', 20);
   

        //relacionamento
        table.integer('user_id')
            .references('usuarios.id')
            .notNullable()
            .onDelete('CASCADE')

        table.timestamps(true, true);

    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('parceiro');

  
};
