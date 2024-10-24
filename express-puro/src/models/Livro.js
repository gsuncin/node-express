import mongoose, { mongo } from "mongoose";

const livroScheema = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "authors", required: true },
  publisher: { type: String, required: true },
  pages: { type: Number },
  completionETA: { type: String },
});

const livros = mongoose.model("livros", livroScheema);

export default livros;
