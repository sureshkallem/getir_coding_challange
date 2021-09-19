const { groupBy, validateRequest } = require('../src/lib/helper');
const { groupByInput, recordsSchema } = require('./mock_data');
const Joi = require('joi');

describe('helper', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('should throw Error with message \'CHOOSE KEY TO GROUP THE DATA\' when no property/key were not passed to group the data', async () => {
        try {
            await groupBy(groupByInput);
        } catch (err) {
            expect(err.message).toBe('Please choose the key to group the data');
        }
    });

    test('Should have the columns("key", "createdAt", "totalCount") after groupby', async () => {
        const result = await groupBy(groupByInput, 'key');
        expect(result['TAKwGc6Jr4i8Z487']).toHaveProperty("key", "createdAt", "totalCount");
    });

    test('Should group the data with given key \'KEY\' ', async () => {
        const result = await groupBy(groupByInput, 'key');
        expect(result['TAKwGc6Jr4i8Z487']).toStrictEqual({
            key: 'TAKwGc6Jr4i8Z487',
            createdAt: '2017-01-28T01:22:14.398Z',
            totalCount: 600
        });
    });
});

