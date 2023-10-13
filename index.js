const express = require('express')
const db = require("./config/db")
const Routes = require("./routes/index.routes")
const cors = require('cors')

const server = express()
const PORT = 3333;

(async () => {
    await db.sync(); // Sincroniza os modelos com o banco de dados
    console.log('Banco de dados sincronizado');
})();

server.use(express.json())
server.use(cors())
server.use('/api', Routes)

server.listen(PORT, () => console.log("ta funcioanndo"))
