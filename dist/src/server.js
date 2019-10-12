"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = require("./app");
const PORT = 3000;
const appInstance = new app_1.App();
const app = appInstance.app;
const server = http_1.default.createServer(app);
app.get("/profile/:id", (req, res) => {
    res.send("Hi" + req.params.id);
});
server.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
