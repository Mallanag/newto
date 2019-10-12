import {Request,Response} from 'express';

export class HealthController{

    public async health(request:Request,response:Response){
            response.status(200).json('Status up');
    };

    public async main(request:Request,response:Response){
            response.status(200).json('Start up');
    };
}