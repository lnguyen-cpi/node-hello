const http = require('http');
const port = process.env.PORT || 3000;
const app_version = process.env.APP_VERSION || "None";
const app_host = process.env.APP_HOST || "None";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = `http://${app_host}:${port} -> Hello NodeJS - ${app_version} - ${app_host}, build all`
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
