const db = require("../models");
const Tutorial = db.tutorials;

// Crea e salva un nuovo Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Tutorial
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    });

    // Save Tutorial in the database
    tutorial
        .save(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Sono risultati degli errori durante il salvataggio del Tutorial."
            });
        });
};

// Recupera tutti i Tutorial dal database 
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Tutorial.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Sono risultati degli errori durante il recupero del Tutorial."
            });
        });
};

// Trova uno specidico Tutorial tramite l'id 
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Non è stato trovato alcun Tutorial con l'id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Sono risulati degli errori nel recuperare il Tutorial con id=" + id });
        });
};

// Aggiorna un Tutorial tramite l'id 
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "I dati per aggiornare il Tutorial non possono essere vuoti"
        });
    }

    const id = req.params.id;

    Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Non è stato possibile aggiornare il Tutorial con id=${id}. Forse non è stato trovato il Tutorial!`
                });
            } else res.send({ message: "Tutorial aggiornato correttamente." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Sono risultati errori nel aggiornare il Tutorial con id=" + id
            });
        });
};

// Elimina uno specifico Id tramite il Tutorial 
exports.delete = (req, res) => {
    const id = req.params.id;

    Tutorial.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Sono risulati degli errori nell'eliminazione del Tutorial con id=${id}. Forse non è stato trovato il Tutorial!`
                });
            } else {
                res.send({
                    message: "Tutorial eliminato con successo."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Non è stato possibile eliminare il Tutorial con id=" + id
            });
        });
};

// Elimina tutti i Tutorial presenti sul datbase 
exports.deleteAll = (req, res) => {
    Tutorial.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} I Tutorial sono stati eliminati correttamente!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Sono risultati degli errori nell'eliminazione di tutti i Tutorial."
            });
        });
};

// Trova tutti i Tutorial pubblicati 
exports.findAllPublished = (req, res) => {
    Tutorial.find({ published: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Sono risultati degli errori nel recuperare i Tutorial."
            });
        });
};