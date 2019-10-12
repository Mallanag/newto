import express from 'express';
import {HealthController} from '../controlers/controler';

export class MainRoute {
    public  HealthController:HealthController = new HealthController();
    

    public register(app: express.Application): void {

        // General
        // Get Health info
        app.route('/health')
            .get(this.HealthController.health);
        
        app.route('/main')
            .get(this.HealthController.main);
            
    }
}