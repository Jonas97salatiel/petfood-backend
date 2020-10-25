exports.up = function(knex) {

    return knex.schema.createTable('cartoes', function(table){

        table.increments('idcartoes').primary();
        table.string('bandeira');
        table.string('numeroCartao');
        table.string('tipoOperacao');
        table.date('validade');
        table.integer('cvv');
        table.string('nomeTitular')

        table.integer('idFormaPagamento')
            .references('forma_pagamentos.idFormaPagamento')
            .notNullable()
            .onDelete('CASCADE')

        table.timestamps(true, true);

    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('cartoes');

};