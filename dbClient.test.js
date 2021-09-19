const { DBClient } = require('../src/lib/dbClient');
const { MongoClient } = require('mongodb');
const { DB_CONNECTION_STRING, DB_NAME, COLLECTION_NAME } = require('../src/lib/constants');

describe('DBClient', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    describe('#getCollection', () => {
        it('To check if the collection method on the MongoClient instance was invoked', async () => {
            const client = { db: jest.fn().mockReturnThis(), collection: jest.fn() };
            const connectSpy = jest.spyOn(DBClient, 'connect').mockResolvedValueOnce(client);
            await DBClient.getCollection({ url: 'mongodb://localhost:27017', db_name: DB_NAME, collection_name: COLLECTION_NAME});
            expect(connectSpy).toBeCalledWith('mongodb://localhost:27017');
            expect(client.db).toBeCalledWith(DB_NAME);
            expect(client.collection).toBeCalledWith(COLLECTION_NAME);
        });
    });

    describe('#connect', () => {
        it('should connect to mongo db', async () => {
            const connectSpy = jest.spyOn(MongoClient, 'connect').mockReturnValueOnce({});
            const actual = await DBClient.connect('mongodb://localhost:27017');
            expect(actual).toEqual({});
            expect(connectSpy).toBeCalledWith('mongodb://localhost:27017', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        });
    });
});