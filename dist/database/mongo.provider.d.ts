export declare const MongoProvider: {
    provide: string;
    useFactory: () => Promise<import("mongodb").Db>;
};
