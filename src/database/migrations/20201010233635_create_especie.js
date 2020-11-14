exports.up = function(knex) {

    return knex.schema.createTable('especie', function(table){

        table.increments('idEspecie').primary();
        table.string('descricao', 50);

        table.timestamps(true, true);

        

    })
  
};

exports.down = function(knex) {
    
    return knex.schema.dropTable('especie');

};