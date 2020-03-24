
exports.up = function(knex) { //criar tabela
    return knex.schema.createTable('incidents', function(table){
        table.increments() // chave primaria que incrementa a cada novo caso

        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()

        table.string('ong_id').notNullable() // relaciona com a tabela de ong
        table.foreign('ong_id').references('id').inTable('ongs') //chave estrangeira para ver se o id da ond esta na tabela 
    })
};

exports.down = function(knex) { //voltar em caso de erro = deletar nesse caso
    return knex.schema.dropTable('incidents')  
};
