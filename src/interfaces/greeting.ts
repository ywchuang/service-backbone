import { User } from "entities/user";

interface Greeting {
    getUser(condition: any): Promise<User>;
    getUsers(): Promise<User>;
    addUser(user: User): void;
    sayHello(user: User): string;
}

export { Greeting };
