exports.up = function(knex) {

    return knex.schema.createTable('formaPagamentos', function(table){

        table.increments('idFormaPagamento').primary();
        table.string('formaPagamento', 100);
        table.string('descricao', 150);
        table.integer('parcelas');
   
        table.timestamps(true, true);


    })
  
};
 
exports.down = function(knex) {

    return knex.schema.dropTable('formaPagamentos');

};