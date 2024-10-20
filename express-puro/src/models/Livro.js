import mongoose from "mongoose";

const livroScheema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  pages: { type: Number },
  completionETA: { type: String },
});

const livros = mongoose.model("livros", livroScheema);

export default livros;
