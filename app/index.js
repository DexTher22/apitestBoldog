import app from "./app.js"

const port = 8000

app.listen(port, (req,res) => {
    console.log(`Listening on port ${port}`)
})