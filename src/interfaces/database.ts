import { Connection } from "typeorm";

interface Database {
    getConnection(): Promise<Connection>;
    closeConnection(): Promise<void>;
}

export { Database };
