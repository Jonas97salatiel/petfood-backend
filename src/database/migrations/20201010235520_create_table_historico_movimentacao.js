exports.up = function(knex) {
  
    return knex.schema.createTable('historicoMovimentacao', function(table){

        table.increments('idHistoricoMovimentacao').primary();
        table.string('descTipoMovimentacao', 100);
        table.float('qtdProduto');
        table.float('valorProduto');

        table.timestamps(true, true);

        table.integer('idProduto')
            .references('produtos.idProduto')
            .notNullable()
            .onDelete('CASCADE')

        table.integer('idTipoMovimentacao')
            .references('tipoMovimentacao.idTipoMovimentacao')
            .notNullable()
            .onDelete('CASCADE')

    })

};

exports.down = function(knex) {
    return knex.schema.dropTable('historicoMovimentacao');
};
