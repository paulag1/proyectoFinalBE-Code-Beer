import bcrypt from 'bcrypt'

import UserDb from '../models/UserSchema'

import { randomInteger } from "../helpers/randomInteger";
import { validateContent } from '../helpers/validateContent';
import { validateData } from '../helpers/validateData';


export const getUsers = async (req, res) => {
  const data = await UserDb.find();

  res.json({
    data: data,
  });
};



export const postUser = async (req, res) => {
    const body = req.body;
  
    const password = body.password;
  
    const cryptedPassword = bcrypt.hashSync(password, 10);
 
   
if(!validateContent("POST_USER", body)){
  res.status(400).json({
    message: "Campos invalidos"
  }) 
  return
}
  
   if (!validateData(body)) {
    res.status(400).json({
      message: 'Campos invalidos',
    });
    return;
  }


    const newUser = new UserDb({
      id: randomInteger(0, 1500000),
      name: body.name,
      lastName: body.lastName,
      email: body.email,
      password: cryptedPassword,
      isActive: true,
      isAdmin: false,
    });
  
    try {
      await newUser.save();
  
      res.json({
        message: 'Usuario creado exitosamente',
      });
    } catch (err) {
      console.log(err)
      res.status(500).json({
        message: 'Hubo un error al guardar el usuario',
      });
    }
  };
  



export const putUser = async (req, res) => {
  const body = req.body;

 
  if (!validateContent("PUT_USER", body)) {
   
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


  const userModified = await UserDb.findOne({
       email: body.email
  });

  if (!userModified) {
    res.status(404).json({
      message: "Usuario no encontrado",
    });
    return;
  }

  userModified.name = body.name;
  userModified.lastName = body.lastName;

  try {
    await userModified.save();

    res.json({
      message: "Usuario modificado exitosamente",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Hubo un error al modificar el usuario",
    });
  }
};


