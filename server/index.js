require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const authCtrl = require('./authController')
const plntCtrl = require('./controller')
// const verifyUser = require('./middlewares/verifyUser')

const app = express()

const{CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

app.use(express.json())
app.use(
    session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
    })
)

//Auth endpoints
app.post('/api/auth/register', authCtrl.register)
app.post('/api/auth/login', authCtrl.login)
app.delete('/api/auth/delete', authCtrl.logout)
app.get('/api/auth/user', authCtrl.getUser)



//plants endpoints


massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB ready!')
    app.listen(SERVER_PORT, () =>
    console.log(`Server ready on port ${SERVER_PORT}`))
})