require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Statische Dateien (Frontend, falls vorhanden)
app.use(express.static(__dirname + '/frontend'));

// Health-Check
app.get('/health', (req, res) => {
  res.send('Server läuft!');
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
