import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        status: "ok",
        uptime: process.uptime(),
        timestamp: Date.now()
    });
    return;
});


app.get("/events", (req, res) => {
    res.setHeader("Content-type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    res.write(`data:Connected to Stream\n\n`);

    const intervalId = setInterval(() => {
        const data = JSON.stringify({ time: new Date().toLocaleTimeString() });

        res.write(`data: ${data}\n\n`);
    }, 1000);

    req.on('close', () => {
        clearInterval(intervalId);
        res.end();
    });
    return;
})

app.listen(8000, () => {
    console.log("server is listening on http://localhost:8000")
})