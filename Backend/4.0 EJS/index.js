import express from "express";

const app = express();
const port=3000;

const today = new Date();
const dayNumber = today.getDay();

let type= "a weekday";
let adv = "It's time to work hard";

if(dayNumber === 0 || dayNumber === 6) {
    type= "the weekend";
    adv= " It's time to have fun";
}

app.get("/", (req, res) => {
    res.render ("index.ejs", {
       dayType: type,
            advice: adv,
    })
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})
