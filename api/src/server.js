import express from 'express'
import bodyParser from 'body-parser'

import databaseDriver from './database-driver'
import boredDriver from './bored-driver'

import activityRouter from './activity/router'
import userRouter from './user/router'

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json())

app.use('/activity', activityRouter(databaseDriver, boredDriver))
app.use('/user', userRouter(databaseDriver))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})