import { useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addPerson = event => {
    event.preventDefault();
    const personExists = persons.find(person => person.name === newName);
    if (personExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat({ name: newName, number: newNumber, id: persons.length + 1 }));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChangeFn={event => setFilter(event.target.value)} />
      <h3>Add a new</h3>
      <PersonForm nameOnChangeFn={event => setNewName(event.target.value)} numberOnChangeFn={event => setNewNumber(event.target.value)} addPersonFn={addPerson} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App