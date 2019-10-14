import express from 'express';
import http from 'http'
import { App } from './app';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });


const PORT =3000;

const appInstance: App = new App();
appInstance.mongoSetup();
const app: express.Application=appInstance.app;
const server =http.createServer(app);


server.listen(PORT,() =>{
    console.log('Express server listening on port '+ PORT);
});