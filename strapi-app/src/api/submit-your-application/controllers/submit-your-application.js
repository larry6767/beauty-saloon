'use strict'

/**
 * submit-your-application controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController(
  'api::submit-your-application.submit-your-application',
)
