const express = require('express')
const app = express()
const PORT = 3001
const cors = require('cors')
app.use(cors())

const persons = { 
    'nelson arkoh':{ 
        "id": 1,
        "name": "Emmanuel Nelson Arkoh", 
        "number": "086455363"
      },
    'joyce efya':{ 
        "id": 2,
        "name": "Joyce Teye Teiko", 
        "number":'0869896004'
      },
    'ebenezer laryea': { 
        "id": 3,
        "name": "Ebenezer Laryea", 
        "number": "0765751333"
          },
    'daniel dzadza':{ 
        "id": 4,
        "name": "Daniel Norkplim Dzadza", 
        "number": "0340251931"
    }


}
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/api', (request, response) => {
    response.json(persons)
})
app.get('/api/:personName', (request, response) =>{ //will handle all HTTP GET requests that are of the form /api/persons/SOMETHING, where SOMETHING is an arbitrary string.
    const personName = request.params.personName.toLowerCase() //The id parameter in the route of a request, can be accessed through the request object

    if(persons[personName]){
     response.json(persons[personName])
    }else{
     response.json(persons['not one of the best'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}!`)
})