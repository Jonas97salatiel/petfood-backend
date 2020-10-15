exports.up = function(knex) {

    return knex.schema.createTable('catoes', function(table){

        table.increments('idcartoes').primary();
        table.string('bandeira');
        table.string('descricao');
        table.string('numeroCartao');
        table.string('tipoOperacao');
        table.date('validade');

        table.integer('idFormaPagamento')
            .references('formaPagamentos.idFormaPagamento')
            .notNullable()
            .onDelete('CASCADE')

        table.timestamps(true, true);

    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('catoes');

};