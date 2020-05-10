import express from 'express';
import indexController from './controllers/index';
const path = require('path');

const PORT = process.env.PORT || 3000;

// initialize the application and create the routes
const app = express();
app.use(indexController);

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

// start the app
app.listen(PORT, (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
});