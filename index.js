const express = require('express')
const teams = require('./teams')

const app = express()

app.get('/', (request, response) => {
  return response.send(teams)
})

app.get('/:id', (request, response) => {
  const { id } = request.params

  const locateTeam = teams.find(team => team.id === Number(id))

  return response.send(locateTeam)
})

app.listen(8081, () => {
  console.log('If you are reading this then it is too late, FLY EAGLES FLY') // eslint-disable-line no-console
})
