"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controler_1 = require("../controlers/controler");
const controler_2 = require("../controlers/controler");
class MainRoute {
    constructor() {
        this.HealthController = new controler_1.HealthController();
        this.Profile = new controler_2.Profile();
    }
    register(app) {
        // General
        // Get Health info
        app.route('/health')
            .get(this.HealthController.health);
        app.route('/main')
            .get(this.HealthController.main);
        app.route('/profile/:id')
            .get(this.HealthController.profile);
        app.route('/profile')
            .post(this.Profile.addProfile);
    }
}
exports.MainRoute = MainRoute;
