"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controler_1 = require("../controlers/controler");
class MainRoute {
    constructor() {
        this.HealthController = new controler_1.HealthController();
    }
    register(app) {
        // General
        // Get Health info
        app.route('/health')
            .get(this.HealthController.health);
        app.route('/main')
            .get(this.HealthController.main);
    }
}
exports.MainRoute = MainRoute;
