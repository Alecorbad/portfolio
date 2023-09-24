import mongoose, { ConnectOptions } from 'mongoose';
import User from './user.model'

import dbConfig from '../config/db.config';

mongoose.Promise = global.Promise;

interface DbModels {
    User:typeof User;
}


const db: {
    url: string, 
    mongoose: typeof mongoose;
    models: DbModels;
} = {
    url: dbConfig.url,
    mongoose,
    models: {} as DbModels,
};

// Connessione al database
mongoose
    .connect(dbConfig.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() => {
        console.log('Connesso al database');
    })
    .catch((err: any) => {
        console.error('Errore nella connessione al database:', err);
        process.exit();
    });

export default db;


