import { createConnection, Connection, ObjectType, EntitySchema } from "typeorm";
import { Database } from "interfaces/database";

export class MysqlDb implements Database {
    private connection: Connection;
    async getConnection() {
        this.connection = await createConnection();

        return this.connection;
    }

    async closeConnection() {
        return this.connection.close();
    }

    getRepository<Entity>(target: ObjectType<Entity> | EntitySchema<Entity> | string) {
        return this.connection.getRepository(target);
    }
}
