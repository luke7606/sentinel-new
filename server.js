require('dotenv').config();
const express = require('express');
const path = require('path');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(express.json());

// 1) Endpoint de chat
app.post('/api/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'No se recibió prompt.' });
    }

    const config = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    });
    const openai = new OpenAIApi(config);

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }]
    });

    const answer = completion.data.choices[0].message.content;
    res.json({ answer });
  } catch (error) {
    console.error('Error con la API de OpenAI:', error);
    res.status(500).json({ error: 'Error interno llamando a OpenAI.' });
  }
});

// 2) En producción, servir el build de React
if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, 'build');
  app.use(express.static(buildPath));
  // Para cualquier ruta no reconocida, devolver index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

// 3) Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server en puerto ${PORT}`);
});
