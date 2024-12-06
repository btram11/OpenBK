const express = require('express')
const {sequelize} = require('./database/models')
const cookieParser = require('cookie-parser')
const verifyJWT = require('./middleware/verifyJWT')
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/auth', require('./routes/auth.route'))
app.use(verifyJWT)
app.use('/user', require('./routes/user.route'))
app.use('/course', require('./routes/course/course.route'))


app.listen(3001, async ()=>{
   console.log('Server is running')
   await sequelize.authenticate()
   console.log('Database connected \n')
   await sequelize.sync({alter: true})
   console.log('Database synced \n')
})
