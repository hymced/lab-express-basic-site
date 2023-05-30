
const express = require("express");

const app = express();

app.use(express.static(__dirname + '/public/'))

app.get("/", (req, res, next) => {
    console.log("homepage requested")
    // res.send("homepage")
    // res.sendFile(__dirname + "/views/page-home.html")
    res.sendFile("/views/page-home.html", { root: __dirname });
})
app.get("/works", (req, res, next) => {
    console.log("works page requested")
    // res.send("works")
    res.sendFile("/views/page-works.html", { root: __dirname });
})
app.get("/about", (req, res, next) => {
    console.log("about page requested")
    // res.send("about")
    res.sendFile("/views/page-about.html", { root: __dirname });
})

const port = 3000
app.listen(port, () => console.log(`now listening on port ${port}: http://localhost:${port}/`))