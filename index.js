const express = require('express')
const Routes = require("./routes/index.routes")
const cors = require('cors')

const server = express()
const PORT = process.env.PORT || 3333;

server.use(express.json())
server.use(cors())
server.use('/api', Routes)


server.listen(PORT, () => console.log("ta funcioanndo"))
