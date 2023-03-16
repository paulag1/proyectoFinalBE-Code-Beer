import express from "express";
import morgan from "morgan";
import cors from "cors";

// configuramos el archivo .env para todo el proyecto
import dotenv from "dotenv";
dotenv.config();

// importamos la conexión a la DB
import "./database/database";

// cargamos tantos archivos de rutas como tengamos
import { routerProducts } from "./routes/productsRoutes";
import { routerUsers } from "./routes/userRoutes";
import { routerAuth } from "./routes/authRoutes";

//1- Inicializamos express
const app = express();

//2- Configuraciones del servidor -> Variables de servidor
app.set("PORT", process.env.PORT || 5000);

//3- Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json()); 

//4- Rutas
app.use(routerProducts);
app.use(routerUsers)
app.use(routerAuth)


app.listen(app.get("PORT"), () => {
  console.log(`Servidor ejecutándose en puerto
${app.get("PORT")}`);
});
