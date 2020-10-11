
exports.up = function(knex) {
  
    return knex.schema.createTable('eanProdutos', function(table){

        table.increments('idEanProdutos').primary();
        table.string('EanProdutos', 50);
        

        //relacionamento
        table.integer('idParceiro')
            .references('parceiro.idParceiro')
            .notNullable()
            .onDelete('CASCADE')

        table.timestamps(true, true);
    })


};

exports.down = function(knex) {
    return knex.schema.dropTable('eanProdutos');
};
