require("dotenv").config();
const knex = require('knex');
const knexConfig = require('../knexfile'); // Import the knexfile configuration

// Use the correct environment configuration (e.g., development)
const db = knex(knexConfig.development); // Or knexConfig[process.env.NODE_ENV]

module.exports = db; // Export the Knex instance to use in your controller
