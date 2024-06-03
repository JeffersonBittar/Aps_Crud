import express from "express";
import {
  addUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers); //pega no banco de dados

router.post("/", addUser); //add usuario e serviço

router.put("/:id", updateUser); //atualiza usuario e serviço

router.delete("/:id", deleteUser); // deleta usuario de serviço

export default router;
