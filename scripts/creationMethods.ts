const colors = require("colors");
require('dotenv').config();
import * as fs from "fs";
import * as cp from 'child_process';
import {
    APP_TSX_TEMPLATE_PATH,
    INDEX_TSX_TEMPLATE_PATH,
    PACKAGE_JSON_TEMPLATE_PATH,
    TS_CONFIG_TEMPLATE_PATH,
    WEBPACK_CONFIG_TEMPLATE_PATH
} from "./constants";

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';


export const writePackageJson = (): boolean => {
    const packageJsonBuffer: string = fs.readFileSync(PACKAGE_JSON_TEMPLATE_PATH, "utf-8");

    try {
        fs.writeFileSync("package.json", packageJsonBuffer);
    } catch (err) {
        console.error(err);
        return false;
    }


    return true;
};


export const writeWebpackConfig = (): boolean => {
    const webpackConfigBuffer: string = fs.readFileSync(WEBPACK_CONFIG_TEMPLATE_PATH, "utf-8");

    try {
        fs.writeFileSync("webpack.config.js", webpackConfigBuffer);
        console.log(colors.brightGreen("Write Webpack Config"));
    } catch (err) {
        console.error(err);
        return false;
    }

    return true;
};


export const writeTsConfig = (): boolean => {
    const tsConfigBuffer: string = fs.readFileSync(TS_CONFIG_TEMPLATE_PATH, "utf-8");

    try {
        fs.writeFileSync("tsconfig.json", tsConfigBuffer);
        console.log(colors.brightGreen("Write TypeScript Config"));
    } catch (err) {
        console.error(err);
        return false;
    }

    return true;
};


export const writeAppTsx = (): boolean => {
    const appTsxBuffer: string = fs.readFileSync(APP_TSX_TEMPLATE_PATH, "utf-8");

    try {
        fs.writeFileSync("src/app.tsx", appTsxBuffer);
        console.log(colors.brightGreen("Write app.tsx"));
    } catch (err) {
        console.error(err);
        return false;
    }

    return true;
};


export const writeIndexTsx = (): boolean => {
    const indexTsxBuffer: string = fs.readFileSync(INDEX_TSX_TEMPLATE_PATH, "utf-8");

    try {
        fs.writeFileSync("src/index.tsx", indexTsxBuffer);
        console.log(colors.brightGreen("Write index.tsx"));
    } catch (err) {
        console.error(err);
        return false;
    }

    return true;
};


export const createDirectory = (path: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        try {
            fs.mkdirSync(path);
            console.log(colors.brightGreen(`Create Directory: ${path}`));
            resolve(path);
        } catch (err) {
            console.error(err);
            reject();
        }
    })
};


export const npmInstallExecutionSync = (): boolean => {
    try {
        console.log(colors.brightGreen("Begin npm install"));
        cp.spawnSync(npm, ['install'], { cwd: process.cwd() });
        console.log(colors.brightGreen("npm install complete"));
    } catch (err) {
        console.error(err);
        return false;
    }

    return true;
};




