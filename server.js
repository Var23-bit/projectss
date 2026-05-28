import http from 'http';
const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Server error' }));
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});