import BaseContainer from "config/inversify.config";
import { HelloUser } from "./hello-user.service";
import SERVICE_IDENTIFIER from "constants/service-identifiers";
import { User } from "entities/user";
import { Container } from "inversify";

let baseContainer: BaseContainer;
let containerInstance: Container;
let userService: HelloUser;

beforeAll(async () => {
    baseContainer = new BaseContainer();
    await baseContainer.binding();

    containerInstance = baseContainer.instance;
    userService = containerInstance.get<HelloUser>(SERVICE_IDENTIFIER.HelloUser);
});

describe("Hello user services", () => {
    test("should have instance", () => {
        expect(containerInstance).toBeInstanceOf(Container);
    });

    test("should add new user", async (done) => {
        const testUser: User = {
            password: "12345",
            name: "ywc",
            email: "test@123.com",
            firstName: "Yuwei",
            lastName: "Chuang"
        };

        const result = await userService.addUser(testUser);

        expect(result).toBe(testUser);

        done();
    });

    test("should return all users", async (done) => {
        const users: Array<User> = await userService.getUsers();

        expect(users.length).toBeGreaterThan(0);
        done();
    });

    test("should say hello to user", async (done) => {
        const user = await userService.getUser({name: "ywc"});

        expect(user).toHaveProperty("name", "ywc");
        expect(userService.sayHello(user)).toEqual(`Hello! ${user.name} (${user.email})`);
        done();
    });

    test("should delete users", async (done) => {
        const user = await userService.getUser({name: "ywc"});
        const deletedUser = await userService.deleteUser(user);

        expect(deletedUser).toBe(user);
        done();
    });

});

afterAll(async (done) => {
    await baseContainer.closeDb();

    done();
});
