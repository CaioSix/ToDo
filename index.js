const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/usuario', (req, res) => {
    res.send('Rota ativada com GET e recurso USUARIO: Nominho, Email e sua senha <3')
  })

app.get('/tarefa', (req, res) => {
    res.send('Rota ativada com GET e os recursos iram aparecer: TU fez, nao fez e ainda vai fazer, pode ter mais informações tambem como nome e etc')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})