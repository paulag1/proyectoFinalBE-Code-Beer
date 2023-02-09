import UserDb from "../models/UserSchema";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { validateContent } from "../helpers/validateContent";
import { validateData } from "../helpers/validateData";

//POST --------------------------

export const postLogin = async (req, res) => {
  /*
    req (body) : {
      username: "1234",
      password: "1234"
    }
  */

  const body = req.body;

  // 1era validacion - Contenido
  if (!validateContent("POST_LOGIN", body)) {
    //error de contenido
    res.status(400).json({
      message: "Campos invalidos",
    });
    return;
  }

  // 2da validacion - Campo por campo
  if (!validateData(body)) {
    res.status(400).json({
      message: "Datos invalidos",
    });
    return;
  }

  // 1- Intentar buscar el usuario en la DB
  // UserDb es el archivo de usuarios exportado del modelo
  const user = await UserDb.findOne({
    username: body.username,
  });

  // 2- Validar las credenciales
  // username incorrecto
  // Comparo contraseñas (contraseña incorrecta)
  if (!user || !bcrypt.compareSync(body.password, user.password)) {
    res.status(401).json({
      message: "Usuario o contraseña no valido(s)",
    });
    return;
  }

  // 3- Crear token con la información pertinente
  // Pasa todas las validaciones
  const userInfo = {
    name: user.name,
    lastName: user.lastName,
    username: user.username,
    isActive: user.isActive,
  };

  const secretKey = process.env.JWT_SECRET_KEY;

  // payload,secretKey
  const token = jwt.sign(userInfo, secretKey, {
    expiresIn: "1h",
  });

  // 4- Devuelvo el token al FE
  res.json({
    token,
  });
};


//FALTA HACER EL LOGOUT ---------------------