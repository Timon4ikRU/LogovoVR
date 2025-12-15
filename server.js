// server.js - работает ТОЛЬКО на Replit
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Раздаём статику из текущей папки (всё что есть в репо)
app.use(express.static(__dirname));

// Будильник для GitHub Actions
app.get('/wake-up', (req, res) => {
  console.log('📞 GitHub разбудил Replit');
  res.json({ 
    project: 'Logovo VR',
    status: 'awake',
    time: new Date().toISOString()
  });
});

// API для лидерборда (если нужно)
app.get('/api/status', (req, res) => {
  res.json({
    service: 'Logovo VR API on Replit',
    uptime: process.uptime()
  });
});

app.listen(PORT, () => {
  console.log(`
  ====================================
  🚀 Logovo VR запущен на Replit!
  📍 Порт: ${PORT}
  📁 Папка: ${__dirname}
  🔗 GitHub: github.com/timon4ikru/LogovoVR
  ====================================
  `);
});
