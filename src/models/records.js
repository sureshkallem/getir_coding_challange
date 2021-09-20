const { DBClient } = require('../lib/dbClient');
const { groupBy } = require('../lib/helper');
const { DB_CONNECTION_STRING, DB_NAME, COLLECTION_NAME } = require('../lib/constants');

/**
 * Returns the list of records for given input
 * @param {object} data 
 * @returns {object} output
 */
exports.getRecords = async (data) => {

    const output = {
        "code": 0,
        "msg": "Success",
        "records": []
    };

    try {
        const {
            startDate,
            endDate,
            minCount,
            maxCount
        } = data;

        console.log('data', data);

        const query = {
            createdAt: {
                $gt: new Date(startDate),
                $lt: new Date(endDate)
            }
        };

        const records = await DBClient.getCollection(
            {
                url: DB_CONNECTION_STRING,
                db_name: DB_NAME,
                collection_name: COLLECTION_NAME
            });
        const recordsDBResponse = await records.find(query).toArray();

        console.log('records from DB:', recordsDBResponse);

        if (recordsDBResponse && recordsDBResponse.length > 0) {
            console.log('inside recordsDBResponse:', recordsDBResponse);
            const groupByRes = groupBy(recordsDBResponse, 'key');

            // Filter the data using min and max count
            for (let key in groupByRes) {
                if (groupByRes[key].totalCount >= minCount && groupByRes[key].totalCount <= maxCount)
                    output.records.push(groupByRes[key]);
            }

            output.records.sort((a, b) => a.totalCount - b.totalCount);
        }
        return output;

    } catch (err) {
        console.error('Get Records Error:', err);

        output.msg = err.message;
        output.code = 500;
        return output;
    }
}

// const mongoose = require('mongoose');
// const recordsSchema = new mongoose.Schema({
//     _id: {
//         type: String,
//         required: true,
//     },
//     key: {
//         type: String,
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         required: true,
//     },
//     counts: {
//         type: [Number],
//         required: true,
//     },
//     value: {
//         type: String,
//         required: true,
//     },
// })
// module.exports = mongoose.model('records', recordsSchema);