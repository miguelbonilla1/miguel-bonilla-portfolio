import express from 'express';
import cors from 'cors';
import path from 'path';  // Para manejar las rutas
import { fileURLToPath } from 'url';  // Para obtener __dirname en ES6
import { sendMail } from './src/mailer.js';
import dotenv from 'dotenv';
dotenv.config();

// Obtener __dirname en ES6 (ya que en ES6 no existe directamente)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Servir los archivos estáticos de tu build
app.use(express.static(path.join(__dirname, 'dist')));

// Ruta para el envío de correos
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await sendMail({ name, email, message });
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
});

// Para cualquier otra ruta, servir el archivo index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
