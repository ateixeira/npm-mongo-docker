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
        
        return app
    },
    
    conn_mongo: function () {
        const mongo_url = process.env.MONGO_URL || 'mongodb://localhost:27017/teixeira'

        mongoose.connect(mongo_url, (error) => {
            if (error) {
                console.error('Please verify if Mongodb is up and running!');
            }
        });

        mongoose.set('debug', true);
    },
    auth: {
        secret: "VtexSecr3t"
    }
}