const express  = require("express");
const app = express();

const PORT = process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.send("Everthink is for Docker, Hello Docker! I am Erhan");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});