import UserDb from '../models/UserSchema'

import { randomInteger } from "../helpers/randomInteger";
import { validateContentUser } from '../helpers/validateContent';
import { validateData } from '../helpers/validateData';

//GET -------------
export const getUsers = async (req, res) => {
  const data = await UserDb.find();

  res.json({
    data: data,
  });
};


//POST ----------
export const postUser = async (req, res) => {
    const body = req.body;
  
    const password = body.password;
  
    const cryptedPassword = bcrypt.hashSync(password, 10);
 
    //1ra validacion
if(!validateContentUser("POST_USER", body)){
  res.status(400).json({
    message: "Campos invalidos"
  }) 
  return
}
   //2da validacion 
   if (!validateData(body)) {
    res.status(400).json({
      message: 'Campos invalidos',
    });
    return;
  }

// Datos validos => crear usuario
    const newUser = new UserDb({
      id: randomInteger(0, 1500000),
      name: body.name,
      lastName: body.lastName,
      username: body.username,
      password: cryptedPassword,
      isActive: true,
    });
  
    try {
      await newUser.save();
  
      res.json({
        message: 'Usuario creado exitosamente',
      });
    } catch (err) {
      res.status(500).json({
        message: 'ERROR: ' + err,
      });
    }
  };
  