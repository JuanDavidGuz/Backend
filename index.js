const express = require('express')
require('dotenv').config()
const { dbConnection } = require('./database/config')
const cors = require('cors')

const app = express();

dbConnection();

app.use(cors())

app.use(express.static('public'))

app.use(express.json());

app.use('/api/auth', require('./routes/auth'))
app.use('/api/post', require('./routes/Post'))

app.listen(process.env.PORT, () => {
    console.log('Server listening on', process.env.PORT)
})

const header ={
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}
}
app.use(cors(header.cors))

const Server = require('./server/server');
const server = new Server();
server.listen();