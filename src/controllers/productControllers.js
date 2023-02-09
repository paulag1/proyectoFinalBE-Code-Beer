import { randomInteger } from '../helpers/randomInteger';
import { validateContentProduct } from '../helpers/validateContent';
import { validateData } from '../helpers/validateData';
import productDB from '../models/ProductSchema';

//POST -----------------------
export const postProduct = async (req, res) => {
  const body = req.body;

  const { userId } = req.user;

  // 1era validacion - Contenido
  if (!validateContentProduct('POST_PRODUCT', body)) {
    //error de contenido
    res.status(400).json({
      message: 'Campos invalidos',
    });
    return;
  }

  // 2da validacion - Campo por campo
  if (!validateData(body)) {
    res.status(400).json({
      message: 'Datos invalidos',
    });
    return;
  }

  // Pasa validacion, se puede crear el producto
  const newProduct = new productDB({
    id: randomInteger(0, 1500000),
    name: body.name,
    price: body.price,
    description: body.description,
    image: body.image,
    category: body.category,
  });

  try {
    await newProduct.save();

    res.json({
      message: 'Producto creado exitosamente',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Hubo un error al guardar el producto',
    });
  }
};