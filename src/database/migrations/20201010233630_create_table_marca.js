exports.up = function(knex) {
  
    return knex.schema.createTable('marca', function(table){

        table.increments('idMarca').primary();
        table.string('descricaoMarca', 50);

        table.timestamps(true, true);
    })


};

exports.down = function(knex) {
    return knex.schema.dropTable('marca');
};
