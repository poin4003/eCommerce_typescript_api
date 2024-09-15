import app from "./src/app";

const PORT = 3055;

const server = app.listen(3055, () => {
  console.log(`WSV eCommerce start with port: http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => console.log(`Exit Server Express`));
});