import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { urlencoded, json } from 'express';
import db from './app/models';
import {ConnectOptions} from "mongoose";

dotenv.config();
startLog();

const app: Application = express();

const corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/html');
  const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Portfolio Express</title>
      </head>
      <body>
        <h1>Benvenuto nella applicazione per imparare Angular, Express e Node.js</h1>
      </body>
      </html>
    `;
  res.send(html);
});

const PORT: number | string = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Il server sta girando all'url: http://localhost:${PORT}/.`);
});

console.log('Eseguo la connessione al database');

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => {
    console.log('Connessione al database riuscita!');
    endLog();
  })
  .catch((err: Error) => {
    console.log('La connessione al database non ha avuto successo!', err);
    endLog();
    process.exit(1);
  });

function startLog() {
  console.log('+++++++++++++++++++++++++++++++++++++++++');
  console.log('Avvio del server Express');
  console.log('+++++++++++++++++++++++++++++++++++++++++');
}

function endLog() {
  console.log('+++++++++++++++++++++++++++++++++++++++++');
}
