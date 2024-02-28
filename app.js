const express = require('express')

const app = express()

const port = 8081;

app.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port}`);
  });

  app.get('/produtos/automovel/:marca/:modelo/:ano', (req, res) => {
    const { marca, modelo, ano } = req.params;
    res.send(`<h1>&nbsp;Carros</h1>&nbsp;&nbsp;Detalhes do automóvel:<br><br>&nbsp;&nbsp;Marca - ${marca}<br>&nbsp;&nbsp;Modelo - ${modelo}<br>&nbsp;&nbsp;Ano - ${ano}`);
  });

  app.get('/cadastrar/usuario', (req,res) => {
    res.send(`<h1>Página de cadastro de usuário</h1>`)
  });
  
  app.get('/contato', (req,res) => {
    res.send(`<h1>Contato</h1>`)
  });