exports.seed = function(knex) {
  return knex('songs').del() // Clears existing data
    .then(function () {
      return knex('songs').insert([
        { title: 'Shape of You', artist: 'Ed Sheeran', album: 'Divide', genre: 'Pop', image: 'image_url_1', audio_url: 'audio_url_1' },
        { title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', genre: 'R&B', image: 'image_url_2', audio_url: 'audio_url_2' },
      ]);
    });
};
