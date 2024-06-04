'use strict';

/**
 * registrarse service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::registrarse.registrarse');
