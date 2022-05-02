const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const PORT = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.json({"notice": "Please redirect to ./api/whoami endpoint for proper usage."})
})

app.get("/api/whoami", (req, res) => {
    res.json({"ipaddress" : req.socket.remoteAddress, "language": req.headers["accept-language"], "software": req.headers["user-agent"]})
  })
  
app.listen(PORT)