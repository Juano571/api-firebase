import express from 'express'
import morgan from 'morgan'
import router from './routes/index.js'

const app = express()

app.set('port', 3000)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(router)

export default app
