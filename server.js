const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

const data = [{
person1: "John",
person2: "Smith"
}]

function getLogger(req, res, next) {
	console.log(`GET request at ${Date.now()}`)
	next()
}

app.get("/", getLogger, (req, res) => {
	res.send("People Default route!")
})

app.get("/people", getLogger,(req, res) => {
	res.json({ data })	
})


app.listen(5000, () => {
console.log("Server running on port 5000")
})

