import express from 'express';
import bodyParser from 'body-parser'
import {MainRoute} from './api/routes/main.route';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });


export class App {
    public app: express.Application;
    public route:MainRoute;
    private mongoUrl:string=process.env.MONGODB_URI;
    constructor(){
        this.app = express();
        this.initializeMiddlewares();
        this.route = new MainRoute();
        this.route.register(this.app);
       
    }
    public mongoSetup():void{
        mongoose.Promise=global.Promise;
        mongoose.connect(this.mongoUrl,{ useNewUrlParser: true,useCreateIndex: true, useUnifiedTopology: true});
		mongoose.connection
			.once('open', () => console.log('MongoDB for ' + process.env.MONGODB_URI + ' is running'))
			.on('error', err => console.error(err))
	};
    
    
    public initializeMiddlewares():void {
       this.app.use(bodyParser.json({limit:'50mb'}))
    }
}