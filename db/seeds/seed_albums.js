exports.seed = function(knex) {
    return knex('albums').del() // Clears existing data
      .then(function () {
        return knex('albums').insert([
          { title: 'Shape of You', artist: 'Ed Sheeran', album_id: '1', image: 'image_url_1', audio_url: 'audio_url_1' },
          { title: 'Blinding Lights', artist: 'The Weeknd', album_id: '2', image: 'image_url_2', audio_url: 'audio_url_2' },
        ]);
      });
  };
  