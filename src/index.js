import express from 'express'
import routes from './routes'
import nunjucks from 'nunjucks'

const app = express()

app.use(routes)

app.listen(process.env.PORT ||3333, ()=> {
//app.listen(5000, ()=> {
    console.log("server running")
})