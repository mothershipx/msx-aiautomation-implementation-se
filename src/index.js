// AI/Automation Implementation Services for SMBs — Entry point
// TODO: Build the core product logic

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ product: 'AI/Automation Implementation Services for SMBs', status: 'pre-mvp' });
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`AI/Automation Implementation Services for SMBs running on port ${PORT}`);
});
