"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const main_route_1 = require("./api/routes/main.route");
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '.env' });
class App {
    constructor() {
        this.mongoUrl = process.env.MONGODB_URI;
        this.app = express_1.default();
        this.initializeMiddlewares();
        this.route = new main_route_1.MainRoute();
        this.route.register(this.app);
    }
    mongoSetup() {
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default.connect(this.mongoUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
        mongoose_1.default.connection
            .once('open', () => console.log('MongoDB for ' + process.env.MONGODB_URI + ' is running'))
            .on('error', err => console.error(err));
    }
    ;
    initializeMiddlewares() {
        this.app.use(body_parser_1.default.json({ limit: '50mb' }));
    }
}
exports.App = App;
