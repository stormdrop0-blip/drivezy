const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques depuis le dossier courant
app.use(express.static(path.join(__dirname)));

// Route principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check pour Railway
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', app: 'MatchAuto / Drivezy' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ MatchAuto démarré sur le port ${PORT}`);
});
