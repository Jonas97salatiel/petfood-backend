exports.up = function(knex) {
  
    return knex.schema.createTable('marca_produtos', function(table){

        table.increments('idmarcaDosProdutos').primary();

        //relacionamento com a tabela de produtos
        table.integer('idProduto')
            .references('produtos.idProduto')
            .notNullable()
            .onDelete('CASCADE')
        //relacionamento com a tabela categorias
        table.integer('idMarca')
            .references('marca.idMarca')
            .notNullable()
            .onDelete('CASCADE')

        table.timestamps(true, true);
    })


};

exports.down = function(knex) {
    return knex.schema.dropTable('marca_produtos');
};
