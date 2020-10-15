exports.up = function(knex) {
  
    return knex.schema.createTable('categorias_produtos', function(table){

        table.increments('idCategoriasDosProdutos').primary();

        //relacionamento com a tabela de produtos
        table.integer('idProduto')
            .references('produtos.idProduto')
            .notNullable()
            .onDelete('CASCADE')
        //relacionamento com a tabela categorias
        table.integer('idCategoria')
            .references('categorias.idCategoria')
            .notNullable()
            .onDelete('CASCADE')

        table.timestamps(true, true);
    })


};

exports.down = function(knex) {
    return knex.schema.dropTable('categorias_produtos');
};