import express from 'express';
import {HealthController} from '../controlers/controler';
import {Profile} from '../controlers/controler'

export class MainRoute {
    public  HealthController:HealthController = new HealthController();
    public  Profile:Profile= new Profile();
    

    public register(app: express.Application): void {

        // General
        // Get Health info
        app.route('/health')
            .get(this.HealthController.health);
        
        app.route('/main')
            .get(this.HealthController.main);

        app.route('/profile/:id')
            .get(this.HealthController.profile)

        app.route('/profile')
            .post(this.Profile.addProfile)
            
    }
}