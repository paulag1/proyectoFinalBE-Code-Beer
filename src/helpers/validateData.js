export const validateData = (body) => {
  const values = Object.entries(body);

  for (let i = 0; i < values.length; i++) {
    const key = values[i][0];
    const value = values[i][1];

    switch (key) {
      case "lastName":
      case "category":
      case "description":
      case "name":
        if (value.trim().length < 2) return false;
        break;
      case "image":
        const urlRegex =
          /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;

        if (!urlRegex.test(value)) {
          return false;
        }
        break;
      case "price":
        if (isNaN(value)) return false;
        if (value < 0) return false;
        break;
      case "email":
        const emailRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!emailRegex.test(value)) {
          return false;
        }
        break;
      case "password":
//BUSCAR UN REGEX VALIDO
        const passwordRegex = /^(?=.*[a-z]){2}(?=.*\d){2}(?!\s)[a-zA-Z\d]{6,16}$/
        if (!passwordRegex.test(value)) {
          return false;
        }
        break;
      default:
        break;
    }
  }

  return true;
};
