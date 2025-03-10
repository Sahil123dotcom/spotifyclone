exports.up = function (knex) {
    return knex.schema.createTable("songs", function (table) {
      table.increments("id").primary(); // Auto-increment ID
      table.string("title").notNullable(); // Song title
      table.string("artist").notNullable(); // Artist name
      table.integer("album_id").unsigned().notNullable(); // Foreign key reference to albums
      table.string("image").notNullable(); // Song image URL
      table.string("audio_url").notNullable(); // Song audio URL
  
      // Foreign key constraint
      table.foreign("album_id").references("id").inTable("albums").onDelete("CASCADE");
  
      table.timestamps(true, true); // Adds created_at & updated_at
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("songs"); // Rollback: Drop table if needed
  };
  