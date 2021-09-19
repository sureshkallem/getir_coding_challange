const Joi = require('joi').extend(require('@joi/date'));
const { validateRequest } = require('../lib/helper');

const filterRecordsSchema = (req, res, next) => {
    const schema = Joi.object({
        startDate: Joi.date().format("YYYY-MM-DD").required(),
        endDate: Joi.date().format("YYYY-MM-DD").required(),
        minCount: Joi.number().default(0).min(0),
        maxCount: Joi.number().required()
    })
    validateRequest(req, res, next, schema);
}

module.exports = {
    filterRecordsSchema
}
