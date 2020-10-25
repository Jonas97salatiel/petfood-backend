exports.up = function(knex) {

    return knex.schema.createTable('produtos', function(table){

        table.increments('idProduto').primary();
        table.string('descricaoProduto', 50);
        table.float('valor');
        table.string('unidadeMedida', 2);
        table.float('peso');
        table.string('status');
        table.string('nome');
        table.integer('quantidade');


        

        
        table.timestamps(true, true);

         //relacionamento
         table.integer('idMarca')
         .references('marca.idMarca')
         .notNullable()
         .onDelete('CASCADE')

         //relacionamento
         table.integer('idEspecie')
         .references('especie.idEspecie')
         .notNullable()
         .onDelete('CASCADE')

         //relacionamento
         table.integer('idCategoria')
         .references('categoria.idCategoria')
         .notNullable()
         .onDelete('CASCADE')

         //relacionamento
        table.integer('idParceiro')
        .references('parceiro.idParceiro')
        .notNullable()
        .onDelete('CASCADE')


    })
  
};

exports.down = function(knex) {
    
    return knex.schema.dropTable('produtos');

};