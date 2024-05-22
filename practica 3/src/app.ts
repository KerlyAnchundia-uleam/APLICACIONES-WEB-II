import server from 'express'
import { TutorRouter, TutoradoRouter, TutoriaRouter } from './rutas' 

const app = server()

app.use(server.json())

app.use('/Tutor', TutorRouter)
app.use('/Tutorado', TutoradoRouter)
app.use('/Tutoria', TutoriaRouter)


app.listen(3000, () => {
    console.log('Server on port 3000')
})