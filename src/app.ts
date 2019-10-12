import express from 'express';
import {MainRoute} from './api/routes/main.route';

export class App {
    public app: express.Application;
    public route:MainRoute;
    constructor(){
        this.app = express();
        this.initializeMiddlewares();
        this.route = new MainRoute();
        this.route.register(this.app);
       
    }
    
    private initializeMiddlewares():void {
       
    }
}