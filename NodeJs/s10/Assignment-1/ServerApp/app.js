const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const urlpath = req.url;

    if (urlpath === "/json") {
        res.setHeader("Content-Type", "application/json"); 

        const jsonData = { message: "This is JSON data from the server." };

        fs.writeFile("info.json", JSON.stringify(jsonData, null, 2), (error) => {
            if (error) {
                res.end(JSON.stringify({ error: "Failed to write JSON file" }));
            } else {
                res.end(JSON.stringify(jsonData)); // Send JSON response
            }
        });

    } else if (urlpath === "/html") {
        res.setHeader("Content-Type", "text/html"); // Set correct content type for HTML
        const htmlData = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>My HTML Page</title>
        </head>
        <body>
          <h1>Welcome to My HTML Page</h1>
          <p>This is a sample HTML file created using Node.js.</p>
        </body>
        </html>`;

        res.end(htmlData);

    } else if (urlpath === "/text") {
        res.setHeader("Content-Type", "text/plain"); // Set content type for plain text
        const textData = "This is a simple text response from the server.";

        fs.writeFile("info.txt", textData, (error) => {
            if (error) {
                res.end("Failed to write TEXT file");
            } else {
                res.end(textData); // Send plain text response
            }
        });

    } else {
        res.setHeader("Content-Type", "application/json"); 
        res.end(JSON.stringify({ error: "Invalid route" }));
    }
});

server.listen(1212, () => {
    console.log("Server started on port 1212");
});
