import { Router } from 'express'



const routes = Router()

routes.use('/kanban',  (request, response)=>{
    return response.send('teste1')}

)

routes.use('/history',  (request, response)=>{
    return response.send('teste2')})


routes.get('/', (request, response)=>{
    return response.send('teste')
})


export default routes