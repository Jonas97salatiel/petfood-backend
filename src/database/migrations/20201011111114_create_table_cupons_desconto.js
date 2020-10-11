exports.up = function(knex) {

    return knex.schema.createTable('cuponsDesconto', function(table){

        table.increments('idCuponsDesconto').primary();
        table.string('descCupom');
        table.date('dataValidade');
        table.boolean('status');
        table.float('valor');
        table.string('tipoCupom');
        

        table.timestamps(true, true);

    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('pedidos');

};
