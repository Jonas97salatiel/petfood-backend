exports.up = function(knex) {

    return knex.schema.createTable('status_produtos', function(table){

        table.increments('idStatus').primary();
        table.string('descricaoStatus', 50);

        table.timestamps(true, true);
    })
  
};

exports.down = function(knex) {
    
    return knex.schema.dropTable('status_produtos');

};
