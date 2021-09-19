/**
 * Groups the data using property
 * @param {Object} data 
 * @param {string} property 
 * @returns {Object} grouped data
 */
const groupBy = (data, property) => {
    // eslint-disable-next-line no-useless-catch
    try {
        if (!property) {
            throw new Error('Please choose the key to group the data');
        }

        const hash = data.reduce((p, c) => {
            if (p[c[property]]) {
                p[c[property]].totalCount += c.counts.reduce((pre, curr) => pre += curr);
            } else {
                p[c[property]] = createTragetObject(c);
            }
            return p;
        }, {});
        return hash;
    } catch (err) {
        throw err;
    }
}

/**
 * Create a new object with input data
 * @param {Object} sourceObject 
 * @returns {Object}
 */
const createTragetObject = (sourceObject) => {
    const temp = {
        "key": sourceObject.key,
        "createdAt": sourceObject.createdAt,
        "totalCount": sourceObject.counts ? sourceObject.counts.reduce((pre, curr) => pre += curr) : 0
    };
    return temp;
}

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Object} next 
 * @param {Object} schema 
 * @returns {Object} if no error will call next() otherwise response with valid error code and message
 */
const validateRequest = (req, res, next, schema) => {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    }
    const { error, value } = schema.validate(req.body, options)
    if (error) {
        res.status(400).send(`Validation error: ${error.details.map(x => x.message).join(', ')}`)
    } else {
        req.body = value
        next()
    }
}

module.exports = { groupBy, validateRequest };