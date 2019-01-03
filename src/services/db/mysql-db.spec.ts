import { getConnectionOptions, Connection } from "typeorm";
import { MysqlDb } from "./mysql-db";

describe("mysql", () => {
    test("get connection options", async () => {
        const connectionOption = await getConnectionOptions();

        expect(connectionOption).toHaveProperty("type", "mysql");
    });

    describe("connection", () => {
        let conn: Connection;
        beforeAll(async () => {
            const db = new MysqlDb();
            conn = await db.getConnection();
        });

        test("connection is on", () => {
            expect(conn).toHaveProperty("isConnected", true);
        });

        test("get respository", () => {
            expect(conn.getRepository("User").metadata).toHaveProperty("tableName", "user");
        });
    });
});
