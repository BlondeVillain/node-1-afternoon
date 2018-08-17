const express = require('express');
const bodyParser = require('body-parser');
const mc = require( __dirname + '/controllers/messages_controller');
const app = express();
const baseURL = "/api/messages";
const port = 3000;

app.use( bodyParser.json() );
app.use( express.static( __dirname + '/../public/build' ) );
app.post( baseURL, mc.create );
app.get( baseURL, mc.read );
app.put( `${baseURL}/:id`, mc.update );
app.delete( `${baseURL}/:id`, mc.delete );
app.listen( port, () => 
{ console.log(`Listening at port: ${port}.`);});