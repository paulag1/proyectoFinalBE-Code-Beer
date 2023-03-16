// Crear , editar un usuario

import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";

import { getUsers, postUser, putUser } from "../controllers/userControllers";

export const routerUsers = express.Router();


routerUsers.post("/user", postUser);


routerUsers.get("/users", getUsers);


routerUsers.put("/user/:email", isAuthenticated, putUser);

