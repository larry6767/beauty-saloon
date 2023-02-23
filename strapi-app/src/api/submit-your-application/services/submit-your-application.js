'use strict'

/**
 * submit-your-application service
 */

const { createCoreService } = require('@strapi/strapi').factories

module.exports = createCoreService(
  'api::submit-your-application.submit-your-application',
)
