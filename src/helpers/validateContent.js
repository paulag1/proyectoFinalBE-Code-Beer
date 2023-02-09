
//PRODUCTS-------------------------
const keysProduct = {
    POST_PRODUCT: ['name', 'price', 'description', 'image', 'category', 'available'],
  };
  
  export const validateContentProduct = (type, body) => {
    const bodyKeysProduct = Object.keysProduct(body);
    const expectedKeysProduct = keysProduct[type];
    // puedo acceder a un campo de mi objeto con el nombre "campo" poniendo objeto["campo"]
  
    //   Compruebo cantidad de datos
    if (expectedKeysProduct.length !== bodyKeysProduct.length) {
      return false;
    }
  
    //   Compruebo cada campo
    expectedKeysProduct.forEach((key) => {
      if (!bodyKeysProduct.includes(key)) {
        return false;
      }
    });
  
    return true;
  };
  


  //USERS ----------------------
const keysUser = {
  POST_USER: ['name', 'lastName', 'username', 'password'],
};

export const validateContentUser = (type, body) => {
  const bodyKeysUser = Object.keysUser(body);
  const expectedKeysUser = keysUser[type];
  // puedo acceder a un campo de mi objeto con el nombre "campo" poniendo objeto["campo"]

  //   Compruebo cantidad de datos
  if (expectedKeysUser.length !== bodyKeysUser.length) {
    return false;
  }

  //   Compruebo cada campo
  expectedKeysUser.forEach((key) => {
    if (!bodyKeysUser.includes(key)) {
      return false;
    }
  });

  return true;
};