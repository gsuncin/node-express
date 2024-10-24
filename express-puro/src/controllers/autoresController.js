import autores from "../models/Autor.js";

class AutorController {
  static getAutors = async (req, res) => {
    let autor = await autores.find();
    res.status(200).json(autor);
  };

  static getAutorById = async (req, res) => {
    try {
      let { id } = req.params;
      let autor = await autores.findById(id);
      res.status(200).send(autor.toJSON());
    } catch (err) {
      res.status(400).send(err);
    }
  };

  static createAutor = async (req, res) => {
    try {
      let autor = new autores(req.body);
      await autor.save();
      res.status(200).send(autor.toJSON());
    } catch (error) {
      res.status(422).send({ message: error });
    }
  };

  static updateAutor = async (req, res) => {
    try {
      let { id } = req.params;
      await autores.findByIdAndUpdate(id, { $set: req.body });
      let data = await autores.findById(id);
      res.status(200).send(data.toJSON());
    } catch (error) {
      res.status(422).send({ message: error });
    }
  };
}

export default AutorController;
