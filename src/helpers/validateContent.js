const keys = {
  POST_PRODUCT: ["name", "price", "description", "image", "category"],
  PUT_PRODUCT: [
    "name",
    "price",
    "description",
    "image",
    "category",
    "productID",
  ],

  POST_USER: ["name", "lastName", "email", "password"],
  PUT_USER: ["name", "lastName", "email"],
  POST_LOGIN: ["email", "password"],
};


export const validateContent = (type, body) => {
  const bodyKeys = Object.keys(body);
  const expectedKeys = keys[type];
  // puedo acceder a un campo de mi objeto con el nombre "campo" poniendo objeto["campo"]

  //   Compruebo cantidad de datos
  if (expectedKeys.length !== bodyKeys.length) {
    return false;
  }

  //   Compruebo cada campo
  expectedKeys.forEach((key) => {
    if (!bodyKeys.includes(key)) {
      return false;
    }
  });

  return true;
};
