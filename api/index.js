 import express from 'express';
import cors from 'cors';

const app = express();


const allowedOrigin = process.env.CLIENT_ORIGIN || '*';

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'online',
    timestamp: new Date().toISOString(),
    faculty: 'Syed Aun Muhammad',
    batch: 'ai-2024101d1+09d',
    runtime:
      typeof Bun !== 'undefined'
        ? 'Bun Engine'
        : 'Node.js Engine'
  });
});


if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(
      `[DEV] Express server listening on http://localhost:${PORT}`
    );
  });
}

export default app;