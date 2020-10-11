
exports.up = function(knex) {
  
    return knex.schema.createTable('enderecos', function(table){

        table.increments('idEndereco').primary();
        table.string('cep', 7);
        table.string('rua', 50);
        table.string('numero', 10);
        table.string('complemento', 50);
        table.string('bairro', 100);
        table.string('cidade', 100);
        table.string('uf', 2);
        table.string('pais', 100);


        //relacionamento
        table.integer('userId')
            .references('usuarios.id')
            .onDelete('CASCADE')

        table.timestamps(true, true);

    })

};

exports.down = function(knex) {
    
    return knex.schema.dropTable('enderecos');
};
