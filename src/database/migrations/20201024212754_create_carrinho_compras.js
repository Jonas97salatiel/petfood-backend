exports.up = function(knex) {

    return knex.schema.createTable('carrinhoCompras', function(table){

        table.increments('idCarrinhoCompras').primary();
        table.string('descricao', 50);
        


        //relacionamento
        table.integer('idProduto')
            .references('produto.idProduto')
            .notNullable()
            .onDelete('CASCADE')


        table.timestamps(true, true);

        

    })
  
};

exports.down = function(knex) {
    
    return knex.schema.dropTable('carrinhoCompras');

};