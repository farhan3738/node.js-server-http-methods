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

    const { method, url } = req;
    const parsedUrl = new URL(url, `http://${req.headers.host}`);

    // Set response header to JSON & GET request
      res.setHeader('Content-Type', 'application/json');

      if (method === 'GET' && parsedUrl.pathname === '/api/items') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'GET request - Fetching all items' }));

        if (method === 'POST' && parsedUrl.pathname === '/api/items') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', () => {
            const newItem = JSON.parse(body);
            res.statusCode = 201; //created
            res.setHeader('Content-Type', 'application/json'); // Set Content-Type header
            res.end(JSON.stringify({ message: `POST request - Adding new item`, data: newItem }));
          });
        }
        
    // PUT Request
    } 
    else if (method === 'PUT' && parsedUrl.pathname.startsWith('/api/items/')) {
        let body = '';
        const itemId = parsedUrl.pathname.split('/').pop();

        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const updatedItem = JSON.parse(body);
            res.statusCode = 200;
            res.end(JSON.stringify({ message: `PUT request - Updating item ${itemId}`, data: updatedItem }));
        });

    // DELETE Request
    } 
    else if (method === 'DELETE' && parsedUrl.pathname.startsWith('/api/items/')) {
        const itemId = parsedUrl.pathname.split('/').pop();
        res.statusCode = 200;
        res.end(JSON.stringify({ message: `DELETE request - Deleting item ${itemId}` }));

    // Handle 404 Not Found
    } 
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Route not found' }));
    }

    // Set server on PORT = 3000
    server.listen(PORT, () => {
      console.log(`Server is listening here -> http://localhost:${PORT}`)
  });