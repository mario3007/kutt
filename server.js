const express = require('express');
const app = express();

// Render setzt process.env.PORT automatisch
const PORT = process.env.PORT || 3000;

// Optional: Statische Dateien nur, wenn vorhanden
const fs = require('fs');
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
