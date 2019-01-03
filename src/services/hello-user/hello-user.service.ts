import { injectable, inject } from "inversify";
import { Greeting } from "interfaces/greeting";
import { User } from "entities/user";
import { Repository } from "typeorm";
import SERVICE_IDENTIFIER from "constants/service-identifiers";

@injectable()
export class HelloUser implements Greeting {

    private readonly _userRepository: Repository<User>;

    public constructor(
        @inject(SERVICE_IDENTIFIER.UserRepository)userRepository: Repository<User>
    ) {
        this._userRepository = userRepository;
    }

    public async addUser (user: User) {
        return await this._userRepository.save(user);
    }

    public async deleteUser (user: User) {
        return await this._userRepository.remove(user);
    }

    public sayHello (user: User) {
        return `Hello! ${user.name} (${user.email})`;
    }

    // the condition here vary
    public async getUser (condition: any) {
        try {
            return await this._userRepository.findOne(condition);
        } catch (e) {
            return e;
        }
    }

    public async getUsers () {
        try {
            return await this._userRepository.find();
        } catch (e) {
            return e;
        }
    }
}
