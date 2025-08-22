const express = require('express');
const fs = require('fs');
const app = express();

// Port von Render nutzen
const PORT = process.env.PORT || 3000;

// Statische Dateien, nur wenn vorhanden
const frontendPath = __dirname + '/frontend';
if (fs.existsSync(frontendPath)) {
  app.use(express.static(frontendPath));
}

// Health-Check
app.get('/health', (req, res) => {
  res.send('Server läuft!');
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
