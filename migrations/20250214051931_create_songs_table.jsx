exports.up = function(knex) {
  return knex.schema.createTable('songs', (table) => {
    table.increments('id').primary(); // Auto-increment ID
    table.string('title').notNullable(); // Song title
    table.string('artist').notNullable(); // Artist name
    table.string('album'); // Album name (optional)
    table.string('image'); // URL of song image
    table.string('audio_url'); // URL of song file
    table.timestamps(true, true); // Created_at and updated_at timestamps
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('songs');
};
