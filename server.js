const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Parse JSON body
app.use(express.json());

// Serve static files from public
app.use(express.static(path.join(__dirname, "public")));

// WebSocket signaling
io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("offer", (offer) => {
        socket.broadcast.emit("offer", offer);
    });

    socket.on("answer", (answer) => {
        socket.broadcast.emit("answer", answer);
    });

    socket.on("candidate", (candidate) => {
        socket.broadcast.emit("candidate", candidate);
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(alertInterval); // Stop alerts when client disconnects
    });
});

// Endpoint for ESP alert
app.post("/alert", (req, res) => {
    const message = req.body.message || "Vibration Detected!";
    console.log("Alert received from ESP8266:", message);
    io.emit("vibration_alert", { message });
    res.status(200).send("Alert received");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
