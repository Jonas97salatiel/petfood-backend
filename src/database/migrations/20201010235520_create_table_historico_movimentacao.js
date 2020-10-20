exports.up = function(knex) {
  
    return knex.schema.createTable('historico_movimentacao', function(table){

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
            .references('tipo_movimentacao.idTipoMovimentacao')
            .notNullable()
            .onDelete('CASCADE')

    })

};

exports.down = function(knex) {
    return knex.schema.dropTable('historico_movimentacao');
};
