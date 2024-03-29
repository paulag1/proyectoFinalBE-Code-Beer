import { randomInteger } from "../helpers/randomInteger";
import { validateContent } from "../helpers/validateContent";
import { validateData } from "../helpers/validateData";
import productDB from "../models/ProductSchema";

export const getProducts = async (req, res) => {
  const data = await productDB.find();

  res.json(data);
};

export const postProduct = async (req, res) => {
  const body = req.body;

  if (!validateContent("POST_PRODUCT", body)) {
    
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
    console.error(err);
    res.status(500).json({
      message: "Hubo un error al guardar el producto",
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  const product = await productDB.findOne({
    productID: productId,
  });

  if (!product) {
    res.status(404).json({
      message: "Producto no encontrado",
    });
    return;
  }

  product.isActive = !product.isActive;

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

export const putProduct = async (req, res) => {
  const body = req.body;

  if (!validateContent("PUT_PRODUCT", body)) {
    //error de contenido
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

  const productModified = await productDB.findOne({
    productID: body.productID,
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

  try {
    await productModified.save();

    res.json({
      message: "Producto modificado exitosamente",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Hubo un error al modificar el producto",
    });
  }
};
