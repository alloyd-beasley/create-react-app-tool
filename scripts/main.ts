import path = require("path");
import {
    writeAppTsx,
    writeIndexTsx,
    writePackageJson,
    writeWebpackConfig,
    npmInstallExecutionSync,
    createDirectory,
    writeTsConfig
} from "./creationMethods";


(async (args) => {

    if (!args[2]) {
        console.error("No project name provided. Please provide a project name.");
        return false;
    }

    const parentDirName: string = args[2];
    const parentDir: string = await createDirectory(`${process.cwd()}/${parentDirName}`);

    try {
        process.chdir(parentDir);

        writePackageJson();
        writeWebpackConfig();
        writeTsConfig();

        await createDirectory(path.join(parentDir, "src"));
        writeAppTsx();
        writeIndexTsx();

        npmInstallExecutionSync();

    } catch (err) {
        console.error(err);
        return false;
    }

    return true;
})(process.argv);
