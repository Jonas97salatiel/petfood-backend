
exports.up = function(knex) {

    return knex.schema.createTable('parceiro', function(table){

        table.increments('idParceiro').primary();
        table.string('razaoSocial', 50);
        table.integer('cnpj');
        table.integer('inscricaoEstadual');
        table.string('telefone', 20);
   

        //relacionamento
        table.integer('userId')
            .references('usuarios.id')
            .notNullable()
            .onDelete('CASCADE')

        table.timestamps(true, true);

    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('parceiro');

  
};
