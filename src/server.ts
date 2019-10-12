import express from 'express';
import http from 'http'
import { App } from './app'


const PORT =3000;

const appInstance: App = new App();
const app: express.Application=appInstance.app;
const server =http.createServer(app);

app.get("/profile/:id", (req, res) => {
    res.send("Hi "+req.params.id);
  });

server.listen(PORT,() =>{
    console.log('Express server listening on port '+ PORT);
});