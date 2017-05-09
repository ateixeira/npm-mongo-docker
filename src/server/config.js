import path from 'path';
import express from 'express';
import exphbs  from 'express-handlebars';
import bodyParser from 'body-parser';

import mongoose from 'mongoose';


module.exports = {
    app: function () {
        const app = express();
        const publicPath = express.static(path.resolve(__dirname, '../../public'));

        // Defining assets configuration
        app.use('/public', publicPath);

        // Templates configuration
        app.engine('handlebars', exphbs({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())

        // sessions configs
        app.use(session({
            cookieName: 'session',
            secret: '3xp3ct0Patr0num',
            duration: 30 * 60 * 1000,
            activeDuration: 5 * 60 * 1000,
        }));
        
        return app
    },
    
    conn_mongo: function () {
        const mongo_url = process.env.MONGO_URL || 'mongodb://mongo:27017/teixeira'

        mongoose.connect(mongo_url, (error) => {
            if (error) {
                console.error('Please verify if Mongodb is up and running!');
            }
        });

        mongoose.set('debug', true);
    },
    auth: {
        secret: "3xp3ct0Patr0num"
    }
}