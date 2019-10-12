"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_route_1 = require("./api/routes/main.route");
class App {
    constructor() {
        this.app = express_1.default();
        this.initializeMiddlewares();
        this.route = new main_route_1.MainRoute();
        this.route.register(this.app);
    }
    initializeMiddlewares() {
    }
}
exports.App = App;
