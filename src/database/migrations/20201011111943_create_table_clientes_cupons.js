exports.up = function(knex) {

    return knex.schema.createTable('clientes_cupons', function(table){

        table.increments('idClientesCupons').primary();

        table.integer('idCuponsDesconto')
            .references('cupons_desconto.idCuponsDesconto')
            .notNullable()
            .onDelete('CASCADE')

        table.integer('idPedidos')
            .references('pedidos.idPedidos')
            .notNullable()
            .onDelete('CASCADE')

        table.integer('clientes')
            .references('clientes.idCliente')
            .notNullable()
            .onDelete('CASCADE')

        table.timestamps(true, true);

    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('clientes_cupons');

};
