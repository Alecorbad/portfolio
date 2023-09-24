import { Request, Response } from 'express';
import User, { IUser } from '../models/user.model';

// Crea e salva un nuovo User
export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    // Create a User
    const user = new User({
      name: req.body.name,
    });

    // Save User in the database
    const data: IUser = await user.save();
    res.send(data);
  } catch (err) {
     const error: Error = err as Error;
    res.status(500).send({
      message: error.message || "Sono risultati degli errori durante il salvataggio del User.",
    });
  }
};

// Recupera tutti i User dal database 
export const findAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const name = req.query.name as string;
    const condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
    const data: IUser[] = await User.find(condition);
    res.send(data);
  } catch (err) {
    const error: Error = err as Error;
    res.status(500).send({
      message: error.message || "Sono risultati degli errori durante il recupero del User.",
    });
  }
};

// Trova uno specidico User tramite il nome 
export const findOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const name = req.params.name;
    const data: IUser | null = await User.findById(name);
    if (!data) {
      res.status(404).send({ message: "Non è stato trovato alcun User con il nome " + name });
    } else {
      res.send(data);
    }
  } catch (err) {
    res.status(500).send({
      message: "Sono risulati degli errori nel recuperare il User con name=" + name,
    });
  }
};

// Aggiorna un User tramite l'id 
export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "I dati per aggiornare il User non possono essere vuoti",
      });
      return;
    }

    const id = req.params.id;

    const data: IUser | null = await User.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    });
    if (!data) {
      res.status(404).send({
        message: `Non è stato possibile aggiornare il User con id=${id}. Forse non è stato trovato il User!`,
      });
    } else {
      res.send({ message: "User aggiornato correttamente." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Sono risultati errori nel aggiornare lo User",
    });
  }
};

// Elimina uno specifico Id tramite il User 
export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;

    const data: IUser | null = await User.findByIdAndRemove(id);
    if (!data) {
      res.status(404).send({
        message: `Sono risulati degli errori nell'eliminazione del User con id=${id}. Forse non è stato trovato il User!`,
      });
    } else {
      res.send({
        message: "User eliminato con successo.",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Non è stato possibile eliminare lo User" ,
    });
  }
};

// Elimina tutti i User presenti sul database 
export const removeAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await User.deleteMany({});
    res.send({
      message: `${data.deletedCount} I User sono stati eliminati correttamente!`,
    });
  } catch (err) {
    const error: Error = err as Error;
    res.status(500).send({
      message: error.message || "Sono risultati degli errori nell'eliminazione di tutti i User.",
    });
  }
};

// Trova tutti i User pubblicati 
export const findAllPublished = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: IUser[] = await User.find({ published: true });
    res.send(data);
  } catch (err) {
    const error: Error = err as Error;
    res.status(500).send({
      message: error.message || "Sono risultati degli errori nel recuperare i User.",
    });
  }
};
