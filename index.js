const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World! from WISE\n');
// });


// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<h1 style="color: red">Hello World!</h1>');
//   res.write('<p>I wonder what else we can send...</p>');
//   res.end();
// });


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  switch (req.url) {
    case "/":
      res.write('<h1 style="color: blue">Hello WISE!</h1>');
      res.write('<p> go to /friday route or /monday route</p>')
      break;
    case "/friday":
    res.write('<h1 style="color: blue">Hello WISE! Happy Friday</h1>');
      res.write('<p>"There is just one legitimate synonym for Friday: Boom Shakalaka."</p>');
      res.write('<img src="https://media.tenor.com/9gNrZa5ZAoEAAAAM/its-friday.gif">')
      break;
      case "/monday":
    res.write('<h1 style="color: blue">Hello WISE! Lets go!!!</h1>');
      res.write('<p>"Monday is like the person who showed up to a party uninvited. Like you will allow it but how rude!"</p>');
      res.write('<img src="https://www.shutterstock.com/image-vector/funny-illustration-message-monday-should-260nw-454787941.jpg">')
      break;
    default:
      res.statusCode = 404;
      res.write("Error: 404 Not Found");
      break;
  }
   res.end();
  })

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
