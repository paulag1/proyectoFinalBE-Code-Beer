import { randomInteger } from "../helpers/randomInteger";
import { validateContent } from "../helpers/validateContent";
import { validateData } from "../helpers/validateData";
import productDB from "../models/ProductSchema";

//GET --------------------------
export const getProducts = async (req, res) => {
  const data = await productDB.find();

  res.json(data);
};

//POST -----------------------
export const postProduct = async (req, res) => {
  const body = req.body;

  // 1era validacion - Contenido
  if (!validateContent("POST_PRODUCT", body)) {
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

  // Pasa validacion, se puede crear el producto
  const newProduct = new productDB({
    productID: randomInteger(0, 1500000),
    name: body.name,
    price: body.price,
    description: body.description,
    image: body.image,
    category: body.category,
    isActive: true,
    quantity: 1,
  });

  try {
    await newProduct.save();

    res.json({
      message: "Producto creado exitosamente",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Hubo un error al guardar el producto",
    });
  }
};

// DELETE ----------------------------------------
export const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  // eliminacion lógica

  const product = await productDB.findOne({
    productID: productId,
  });

  if (!product) {
    res.status(404).json({
      message: "Producto no encontrado",
    });
    return;
  }

  product.isActive = false;

  try {
    await product.save();

    res.json({
      message: "Producto eliminado exitosamente",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Hubo un error al eliminar el producto",
    });
  }
};

// PUT -------------------------------------------
export const putProduct = async (req, res) => {
  const body = req.body;

  // 1era validacion - Contenido
  if (!validateContent("PUT_PRODUCT", body)) {
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

  // Pasa validacion, se puede modificar el producto
  const productModified = await productDB.findOne({
       productID: body.productID
  });

  if (!productModified) {
    res.status(404).json({
      message: "Producto no encontrado",
    });
    return;
  }

  productModified.name = body.name;
  productModified.price = body.price;
  productModified.description = body.description;
  productModified.image = body.image;
  productModified.category = body.category;
  // productModified.isActive = body.isActive;
  // productModified.quantity = body.quantity;

  try {
    await productModified.save();

    res.json({
      message: "Producto modificado exitosamente",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Hubo un error al modificar el producto",
    });
  }
};
