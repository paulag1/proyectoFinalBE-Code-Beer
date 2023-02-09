// Crear , editar un usuario

import express from "express";

import { getUsers, postUser } from "../controllers/userControllers";

export const routerUsers = express.Router();

// POST -----------
routerUsers.post("/user", postUser);

// GET -----------
routerUsers.get("/users", getUsers);
