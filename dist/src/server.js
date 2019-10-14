"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = require("./app");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '.env' });
const PORT = 3000;
const appInstance = new app_1.App();
appInstance.mongoSetup();
const app = appInstance.app;
const server = http_1.default.createServer(app);
server.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
