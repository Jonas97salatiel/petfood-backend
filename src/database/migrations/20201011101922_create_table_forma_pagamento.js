exports.up = function(knex) {

    return knex.schema.createTable('formaPagamentos', function(table){

        table.increments('idFormaPagamento').primary();
        table.string('formaPagamento', 100);
        table.integer('qtdParcelas');
        table.string('descricaoPagamento', 100);
   
        table.timestamps(true, true);

    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('formaPagamentos');

};