"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoProvider = void 0;
const mongodb_1 = require("mongodb");
exports.MongoProvider = {
    provide: 'MONGO_CLIENT',
    useFactory: async () => {
        const uri = 'mongodb://localhost:27017';
        const client = new mongodb_1.MongoClient(uri);
        await client.connect();
        return client.db('mydb');
    }
};
//# sourceMappingURL=mongo.provider.js.map