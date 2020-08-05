import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('users', table =>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}

// como o knex lê somente Js,
// será necessário reescrever o método knex latest para funcionar com o typescript.