import { createServer } from 'node:http';

const PORT = 3000;
const server = createServer((req, res) => {
    
  const url = req.url;
      if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Home page.');
        }
      else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About page.');
      };
    });

    server.listen(PORT, () => {
      console.log(`Server is listening here -> http://localhost:${PORT}`)
  });