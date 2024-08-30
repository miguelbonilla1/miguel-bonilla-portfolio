import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Sirve los archivos estáticos de la carpeta 'dist'
app.use(express.static(path.join(__dirname, "dist")));

// Maneja todas las rutas y envía el archivo index.html como respuesta
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
