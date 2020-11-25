require('dotenv').config();
const cwd = process.cwd();

export const PACKAGE_JSON_TEMPLATE_PATH: string = `${__dirname}/../templates/package_template.json`;
export const WEBPACK_CONFIG_TEMPLATE_PATH: string = `${__dirname}/../templates/webpack_template.config.js`;
export const TS_CONFIG_TEMPLATE_PATH: string = `${__dirname}/../templates/tsconfig_template.json`;
export const APP_TSX_TEMPLATE_PATH: string = `${__dirname}/../templates/app_template.tsx`;
export const INDEX_TSX_TEMPLATE_PATH: string = `${__dirname}/../templates/index_template.tsx`;
export const TEST_ENVIRONMENT_WRITE_DIR: string = `${cwd}/__tests__/`;