// Crear , editar un usuario

import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";

import { deleteUser, getUsers, postUser, putUser } from "../controllers/userControllers";

export const routerUsers = express.Router();

// POST -----------
routerUsers.post("/user", postUser);

// GET -----------
routerUsers.get("/users", getUsers);

// PUT -----------
routerUsers.put("/user/:email", isAuthenticated, putUser);

//DELETE ---------
routerUsers.delete("/user/:userID", isAuthenticated, deleteUser);
