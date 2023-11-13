const fs = require("fs");
const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  const serve = (pathToFile) => {
    fs.readFile(pathToFile, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data);
      }
    });
  };

  switch (req.url) {
    case "/": {
      serve("index.html");
      break;
    }
    case "/about": {
      serve("about.html");
      break;
    }
    case "/contact-me": {
      serve("contact-me.html");
      break;
    }
    case "/style.css": {
      serve("style.css");
      break;
    }
    default: {
      serve("404.html");
    }
  }
});
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
