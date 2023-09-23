
/* File che permette il collegamento al database */

// Risorse utilizzate per impostare il progetto:
//  https://www.bezkoder.com/angular-10-mongodb-node-express/

startLog();

// Importo express
//  https://www.npmjs.com/package/express
const express = require("express");

// Importo il pacchetto cors
//  https://www.npmjs.com/package/cors
const cors = require("cors");

// Importo i pacchetti urlencoded e json
const {urlencoded, json} = require("express");


// Creo un'applicazione express
const app = express();

// Utilizzo il middleware cors per accettare le richieste provenienti dall'origine specificata
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

// Faccio il parse del content-type - application/json
app.use(json());

// Faccio il parse del content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

// Definizione della route di origine
app.get("/", (req, res) => {
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

// Avvio il server in modo che ascolti da una porta specifica
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Il server sta girando all'url: http://localhost:${PORT}/.`);
});



// Database
//  https://www.npmjs.com/package/mongodb
// Installare sul sistema MongoDB
//  https://www.mongodb.com/try/download/community
const db = require("./app/models");
console.log("Eseguo la connessione al database")
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connessione al database riuscita!");
        endLog();
    })
    .catch(err => {
        console.log("La connessione al database non ha avuto successo!", err);
        endLog();
        process.exit();
    });


function startLog(){
    console.log("+++++++++++++++++++++++++++++++++++++++++")
    console.log("Avvio del server Express")
    console.log("+++++++++++++++++++++++++++++++++++++++++")
}

function endLog(){
    console.log("+++++++++++++++++++++++++++++++++++++++++")
}