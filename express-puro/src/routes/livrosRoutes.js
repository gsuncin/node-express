import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router.get("/livros", LivroController.getLivros);
router.get("/livros/:id", LivroController.getLivroById);
router.post("/livros", LivroController.createLivro);
router.put("/livros/:id", LivroController.updateLivro);

export default router;
