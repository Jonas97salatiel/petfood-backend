
exports.up = function(knex) {

    return knex.schema.createTable('parceiro', function(table){

        table.increments('idParceiro').primary();
        table.string('razaoSocial', 50);
        table.string('cnpj', 18);
        table.string('inscricaoEstadual', 12);
        table.string('telefone', 20);
        table.string('urlImageLogo');
   

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
