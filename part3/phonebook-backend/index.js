const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const middleware = morgan(":method :url :status :res[content-length] - :response-time ms :body");

morgan.token("body", (request, response) => {
    return request.method === "POST" ? JSON.stringify(request.body) : null;
});

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

const generateId = () => {
    /*const maxId = persons.length > 0
        ? Math.max(...persons.map(n => Number(n.id)))
        : 0;
    return String(maxId + 1);*/
    const newId = String(Math.floor(Math.random() * 1000000));
    return persons.find(person => person.id === newId) ? generateId() : newId;
};

app.use(express.json());
app.use(middleware);
app.use(cors());
app.use(express.static("static"));

app.get("/info", (request, response) => {
    response.send(`<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`);
});

app.get("/api/persons", (request, response) => {
    response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
    const id = request.params.id;
    const person = persons.find(person => person.id === id);
    if (person) {
        response.json(person);
    } else {
        response.status(404).end();
    }
});

app.delete("/api/persons/:id", (request, response) => {
    const id = request.params.id;
    persons = persons.filter(person => person.id !== id);
    response.status(204).end();
});

app.post("/api/persons", (request, response) => {
    const body = request.body;

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: "name or number missing"
        });
    } else if (persons.find(person => person.name === body.name)) {
        return response.status(400).json({
            error: "name must be unique"
        });
    };

    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    };

    persons = persons.concat(person);

    response.json(person);
})

const PORT = process.env.PORT || 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);