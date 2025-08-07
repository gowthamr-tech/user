import { MongoClient } from "mongodb";

export const MongoProvider={
    provide:'MONGO_CLIENT',
    useFactory:async()=>{
        const uri='mongodb://localhost:27017';
        const client=new MongoClient(uri);
        await client.connect();
        return client.db('mydb');

    }
}