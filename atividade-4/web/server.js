const express = require('express');
const app = express();

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/data', (req, res) => {
  const data = req.body;
  res.json({
    message: 'Sucesso!',
    data: data
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
