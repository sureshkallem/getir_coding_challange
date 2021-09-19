const { DBClient } = require('../src/lib/dbClient');
const { getRecords } = require('../src/models/records');
// const { jest } = require('@jest/globals');
const { groupByInput } = require('./mock_data')

describe('Records Model', () => {
    let input = {};
    afterEach(() => {
        input = {};
    });
    describe('#getRecords', () => {
        it('should return empty result for non matching filter', async () => {
            input = {
                "startDate": "2018-12-08",
                "endDate": "2018-02-02",
                "minCount": 2600,
                "maxCount": 3000
            };
            const records = { find: jest.fn().mockReturnThis(), toArray: jest.fn().mockResolvedValueOnce(groupByInput) };
            jest.spyOn(DBClient, 'getCollection').mockResolvedValueOnce(records);

            const res = await getRecords(input);
            console.log('res', res);

            expect(res.code).toEqual(0);
            expect(res.msg).toEqual('Success');
            expect(res.records).toEqual([]);
        });

        it('should return the data', async () => {
            input = {
                "startDate": "2018-12-08",
                "endDate": "2018-02-02",
                "minCount": 21,
                "maxCount": 3000
            };
            const records = { find: jest.fn().mockReturnThis(), toArray: jest.fn().mockResolvedValueOnce(groupByInput) };
            const getCollectionSpy = jest.spyOn(DBClient, 'getCollection').mockResolvedValueOnce(records);

            const res = await getRecords(input);
            console.log('res', res);

            expect(res.code).toEqual(0);
            expect(res.msg).toEqual('Success');
            expect(res.records.length).toBeGreaterThan(0);
        });

        it('should return the data and match the output format', async () => {
            input = {
                "startDate": "2018-12-08",
                "endDate": "2018-02-02",
                "minCount": 21,
                "maxCount": 3000
            };
            const records = { find: jest.fn().mockReturnThis(), toArray: jest.fn().mockResolvedValueOnce(groupByInput) };
            const getCollectionSpy = jest.spyOn(DBClient, 'getCollection').mockResolvedValueOnce(records);

            const res = await getRecords(input);
            console.log('res', res);

            expect(res).toHaveProperty('code');
            expect(res).toHaveProperty('msg');
            expect(res).toHaveProperty('records');
            expect(res.records[0]).toHaveProperty('key');
            expect(res.records[0]).toHaveProperty('createdAt');
            expect(res.records[0]).toHaveProperty('totalCount');
        });

        it('should return the data and match the min and max count', async () => {
            input = {
                "startDate": "2018-12-08",
                "endDate": "2018-02-02",
                "minCount": 21,
                "maxCount": 3000
            };
            const records = { find: jest.fn().mockReturnThis(), toArray: jest.fn().mockResolvedValueOnce(groupByInput) };
            const getCollectionSpy = jest.spyOn(DBClient, 'getCollection').mockResolvedValueOnce(records);

            const res = await getRecords(input);
            console.log('res', res);

            expect(res.code).toEqual(0);
            expect(res.msg).toEqual('Success');
            expect(res.records.length).toBeGreaterThan(0);
            expect(res.records[0].totalCount).toBeGreaterThanOrEqual(input.minCount);
            expect(res.records[0].totalCount).toBeLessThanOrEqual(input.maxCount);
        });
    });
});