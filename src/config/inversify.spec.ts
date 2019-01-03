import BaseContainer from "./inversify.config";
import { HelloUser } from "services/hello-user/hello-user.service";
import SERVICE_IDENTIFIER from "constants/service-identifiers";

describe("Inversify container", () => {
    let baseContainer: BaseContainer;

    beforeAll(() => {
        baseContainer = new BaseContainer();
    });

    test("bound services", async () => {
        await baseContainer.binding();

        const helloUser = baseContainer.instance.get<HelloUser>(SERVICE_IDENTIFIER.HelloUser);

        expect(baseContainer.instance.isBound(SERVICE_IDENTIFIER.HelloUser)).toBeTruthy();
        expect(helloUser).toBeInstanceOf(HelloUser);
    });

    afterAll(async (done) => {
        await baseContainer.closeDb();

        done();
    });
});
