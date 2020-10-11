exports.up = function(knex) {
  
    return knex.schema.createTable('tipoMovimentacao', function(table){

        table.increments('idTipoMovimentacao').primary();
        table.string('descTipoMovimentacao', 100);
        table.string('tipoMovimentacao', 1);
        table.date('dataMovimentacao');

        table.timestamps(true, true);
    })

};

exports.down = function(knex) {
    return knex.schema.dropTable('tipoMovimentacao');
};