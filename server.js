
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Docker Cloud Application</title>
            <style>
                body {
                    font-family: Arial;
                    text-align: center;
                    background-color: #e3f2fd;
                    padding: 50px;
                }

                h1 {
                    color: #1565c0;
                }

                p {
                    font-size: 20px;
                }
            </style>
        </head>

        <body>
            <h1>Welcome to Docker Cloud Deployment!</h1>
            <p>My Node.js application is running successfully.</p>
            <p>Deployed using Docker and Render.</p>
        </body>
        </html>
    `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
