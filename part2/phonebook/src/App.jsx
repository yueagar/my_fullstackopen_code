import { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data);
      })
  }, [])

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