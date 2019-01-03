import "reflect-metadata";
import { Container, AsyncContainerModule, interfaces } from "inversify";
import SERVICE_IDENTIFIER from "constants/service-identifiers";
import { Greeting } from "interfaces/greeting";
import { HelloUser } from "services/hello-user/hello-user.service";
import { Repository } from "typeorm";
import { User } from "entities/user";
import { MysqlDb } from "services/db/mysql-db";

export default class BaseContainer {
    baseContainer: Container;

    private dbInstance: MysqlDb;

    constructor() {
        this.baseContainer = new Container();
    }

    async binding() {
        // service binding
        this.baseContainer.bind<Greeting>(SERVICE_IDENTIFIER.HelloUser).to(HelloUser);

        // db resporities binding
        const dbServices = new AsyncContainerModule(async (bind: interfaces.Bind) => {
            this.dbInstance = new MysqlDb();

            await this.dbInstance.getConnection();

            // the Jest plugin doesn't like getRepository by Entity objectType
            // but the Jest cli works fine. i.e. this.dbInstance.getRepository(User)
            // have to use string so that it can find the respository
            bind<Repository<User>>(SERVICE_IDENTIFIER.UserRepository)
                .toDynamicValue(() => this.dbInstance.getRepository("User"))
                .inRequestScope();

        });

        await this.baseContainer.loadAsync(dbServices);
    }

    async closeDb() {
        return this.dbInstance.closeConnection();
    }

    get instance () {
        return this.baseContainer;
    }
}
