// Imports
const express = require("express")
const app = express()
const port = 3000

// Static Files
app.use(express.static("public"))
app.use('/css', express.static(__dirname + "public/css"))
app.use('/js', express.static(__dirname + "public/js"))

// Set Views
app.set("views", "./views")
app.set("view engine", "ejs")

app.get('', (req, res) => {
    res.render("index", { text: "This is EJS"})
})

// Liston on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))