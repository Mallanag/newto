import {Request,Response} from 'express';
import {User} from '../schemas/profile.schema';

export class HealthController{

    public async health(request:Request,response:Response){
            response.status(200).json('Status up');
    };

    public async main(request:Request,response:Response){
            response.status(200).json('Start up');
    };

    public async profile(request:Request,response:Response){
        response.send('Start up'+ request.params.id);
};
    
}

export class Profile{
    
    public async addProfile(request:Request,response:Response){
          const postData = request.body
          const createdProfile = new User({
                  name:postData.name,
                  age:postData.age,
                  mobile:postData.mobile,
                  company:postData.company,
          });
          const user = await createdProfile.save();
           response.status(201).json(user);
    };
}