import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
});

app.get("/about", (req, res) => {
    res.send("<h1>About me</h1> <p>This is me!</p>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me</h1>")
})

app.listen(port, () => {
console.log(`server running on ${port}`);
})