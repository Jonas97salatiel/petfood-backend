exports.up = function(knex) {

    return knex.schema.createTable('produtos', function(table){

        table.increments('idProduto').primary();
        table.string('descricaoProduto', 50);
        table.float('valor');
        table.float('qtdEstoque');
        table.string('medida', 2);
        table.float('peso');
        table.string('status');
        

        //relacionamento
        table.integer('idParceiro')
            .references('parceiro.idParceiro')
            .notNullable()
            .onDelete('CASCADE')

        table.timestamps(true, true);
    })
  
};

exports.down = function(knex) {
    
    return knex.schema.dropTable('produtos');

};