import { createServer } from 'node:http'; // Import createServer

const PORT = 3000;
const server = createServer((req, res) => {
    
  const url = req.url; 
      // Add route '/'
      if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Home page.');
        }
        // Add another route '/about'
      else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About page.');
      };
    });

    // Set server on PORT = 3000
    server.listen(PORT, () => {
      console.log(`Server is listening here -> http://localhost:${PORT}`)
  });