'use strict';

/**
 * registrarse router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::registrarse.registrarse');
