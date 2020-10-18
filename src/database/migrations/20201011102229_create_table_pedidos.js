exports.up = function(knex) {

    return knex.schema.createTable('pedidos', function(table){

        table.increments('idPedidos').primary();
        table.string('nomeCliente', 100);
        table.float('valorPedido');
        table.string('status', 20);

        table.integer('idCliente')
            .references('clientes.idCliente')
            .notNullable()
            .onDelete('CASCADE')

        table.integer('idFormaPagamento')
            .references('forma_pagamentos.idFormaPagamento')
            .notNullable()
            .onDelete('CASCADE')

        table.integer('idEndereco')
            .references('enderecos.idEndereco')
            .notNullable()
            .onDelete('CASCADE')
   
        table.timestamps(true, true);

    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('pedidos');

};
