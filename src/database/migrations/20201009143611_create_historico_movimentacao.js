
exports.up = function(knex) {
  
    return knex.schema.createTable('historicoMovimentacao', function(table){

        table.increments('idTipoMovimentacao').primary();
        table.string('descTipoMovimentacao', 7);
        table.date('dataMovimentacao', true);
        table.string('tipoMovimentacao', 50);


    })

};

exports.down = function(knex) {
    
    return knex.schema.dropTable('historicoMovimentacao');
};
