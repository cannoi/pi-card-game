const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static('public'));
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));