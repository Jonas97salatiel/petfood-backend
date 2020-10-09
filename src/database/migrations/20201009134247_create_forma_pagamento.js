
exports.up = function(knex) {

    return knex.schema.createTable('formaPagamento', function(table){

        table.increments('idFormaPgto').primary();
        table.string('formaPgto', 50);
        table.string('descricao',100);
        table.timestamps(true,true);
        
   
            })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('formaPagamento');

  
};
