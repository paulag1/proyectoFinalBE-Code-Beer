import UserDb from "../models/UserSchema";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { validateContent } from "../helpers/validateContent";
import { validateData } from "../helpers/validateData";



export const postLogin = async (req, res) => {


  const body = req.body;

  
  if (!validateContent("POST_LOGIN", body)) {
    
    res.status(400).json({
      message: "Campos invalidos",
    });
    return;
  }

  
  if (!validateData(body)) {
    res.status(400).json({
      message: "Datos invalidos",
    });
    return;
  }

  const user = await UserDb.findOne({
    email: body.email,
  });

  if (!user || !bcrypt.compareSync(body.password, user.password)) {
    res.status(401).json({
      message: "Email o contraseña no valido(s)",
    });
    return;
  }

  const userInfo = {
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    isActive: user.isActive,
    isAdmin: user.isAdmin
  };

  const secretKey = process.env.JWT_SECRET_KEY;

  
  const token = jwt.sign(userInfo, secretKey, {
    expiresIn: "1h",
  });

  
  res.json({
    token,
  });
};