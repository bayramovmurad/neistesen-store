import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({salam:"Salam"})
})

app.listen(3001, () => console.log("listening o port 3001"));