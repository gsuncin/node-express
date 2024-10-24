import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router.get("/autores", AutorController.getAutors);
router.get("/autores/:id", AutorController.getAutorById);
router.post("/autores", AutorController.createAutor);
router.put("/autores/:id", AutorController.updateAutor);

export default router;
    