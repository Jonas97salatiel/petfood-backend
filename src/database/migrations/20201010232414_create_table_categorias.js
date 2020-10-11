exports.up = function(knex) {
  
    return knex.schema.createTable('categorias', function(table){

        table.increments('idCategoria').primary();
        table.string('descricaoCategoria', 50);

        table.timestamps(true, true);
    })


};

exports.down = function(knex) {
    return knex.schema.dropTable('categorias');
};