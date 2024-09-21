import app from "./src/app";

const PORT = process.env.PORT || 3056;

const server = app.listen(PORT, () => {
  console.log(`WSV eCommerce start with port: http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => console.log(`Exit Server Express`));
});