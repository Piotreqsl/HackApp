'use strict';

/**
 * point-discovery service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::point-discovery.point-discovery');
