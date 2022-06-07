const express = require('express')
const app = express()
const PORT = 3001
const cors = require('cors')
app.use(cors())

const persons = { 
    'nelson arkoh':{ 
        "id": 1,
        "name": "Emmanuel Nelson Arkoh", 
        "number": "0249451363"
      },
    'joyce efya':{ 
        "id": 2,
        "name": "Joyce Teye Teiko", 
        "number":'0559896004'
      },
    'ebenezer laryea': { 
        "id": 3,
        "name": "Ebenezer Laryea", 
        "number": "0245751333"
          },
    'daniel dzadza':{ 
        "id": 4,
        "name": "Daniel Norkplim Dzadza", 
        "number": "0240751931"
    }


}
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/api', (request, response) => {
    response.json(persons)
})
app.get('/api/:personName', (request, reponse) =>{ //will handle all HTTP GET requests that are of the form /api/persons/SOMETHING, where SOMETHING is an arbitrary string.
    const personName = request.params.personName.toLowerCase() //The id parameter in the route of a request, can be accessed through the request object
    const persons = persons.find(persons => persons.personName == personName) // find method of arrays is used to find the note with an personName that matches the parameter. The note is then returned to the sender of the request.
    
    if(persons[personName]){
        response.json(persons[personName])
       }else{
        response.json(persons['not one of the best'])
       }console.log(persons)
        response.json(persons)
    })
app.listen(PORT, () =>{
    console.log(`The server is running on ${PORT}!`)
})