import livros from "../models/livro.js";

class LivroController {
  static getLivros = async (req, res) => {
    let liv = await livros.find();
    res.status(200).json(liv);
  };

  static getLivroById = async (req, res) => {
    try {
      let { id } = req.params;
      let livro = await livros.findById(id);
      res.status(200).send(livro.toJSON());
    } catch (err) {
      res.status(400).send(err);
    }
  };

  static createLivro = async (req, res) => {
    try {
      let livro = new livros(req.body);
      await livro.save();
      res.status(200).send(livro.toJSON());
    } catch (error) {
      res.status(422).send({ message: error });
    }
  };

  static updateLivro = async (req, res) => {
    try {
      let { id } = req.params;
      await livros.findByIdAndUpdate(id, { $set: req.body });
      let data = await livros.findById(id);
      res.status(200).send(data.toJSON());
    } catch (error) {
      res.status(422).send({ message: error });
    }
  };
}

export default LivroController;
