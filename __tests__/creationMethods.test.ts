import * as path from "path";
import {
    writePackageJson,
    writeWebpackConfig,
    writeAppTsx,
    writeIndexTsx,
    createDirectory,
} from "../creationMethods";
import { TEST_ENVIRONMENT_WRITE_DIR } from "../constants";


describe("create project directories", () => {
    test("create root directory", async () => {
        const fileExists = await createDirectory(`${TEST_ENVIRONMENT_WRITE_DIR}/parentDir/`)
        expect(fileExists).toBeTruthy();

        process.chdir(path.join(TEST_ENVIRONMENT_WRITE_DIR, "parentDir"));
    })

    test("create src directory", async () => {
        const fileExists = await createDirectory("src")
        expect(fileExists).toBeTruthy();
    })

    test("create dist directory", async () => {
        const fileExists = await createDirectory("dist")
        expect(fileExists).toBeTruthy();
    })
});

describe("write and check template files", () => {
    test("write package.json template", () => {
        const doesPackageJsonExist: boolean = writePackageJson();

        expect(doesPackageJsonExist).toBe(true);
    })

    test("write webpack.config template", () => {
        const doesWebpackConfigExist: boolean = writeWebpackConfig();

        expect(doesWebpackConfigExist).toBe(true);
    })

    test("write app tsx template", () => {
        const doesAppTsxExist: boolean = writeAppTsx();

        expect(doesAppTsxExist).toBe(true);
    })

    test("write index tsx template", async () => {
        const doesIndexTsxExist: boolean = writeIndexTsx();

        expect(doesIndexTsxExist).toBe(true);
    })
});





