exports.up = function(knex) {

    return knex.schema.createTable('pedidosProdutos', function(table){

        table.increments('idPedidosPedidos').primary();
        table.integer('qtdProduto');
        table.float('valorProduto');

        table.integer('idPedidos')
            .references('pedidos.idPedidos')
            .notNullable()
            .onDelete('CASCADE')

        table.integer('idProduto')
            .references('produtos.idProduto')
            .notNullable()
            .onDelete('CASCADE')

        table.timestamps(true, true);

    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('pedidos');

};