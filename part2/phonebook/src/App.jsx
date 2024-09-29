import { useState, useEffect } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import PersonsService from "./services/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    PersonsService
      .getAll()
      .then(data => {
        setPersons(data);
      });
  }, []);

  const addPerson = event => {
    event.preventDefault();
    const personExists = persons.find(person => person.name === newName);
    if (personExists) {
      /*alert(`${newName} is already added to phonebook`);
      return;*/
      const replace = confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      if (replace) {
        return PersonsService
          .update(personExists.id, { ...personExists, number: newNumber })
          .then(data => {
            setPersons(persons.map(person => person.id == data.id ? { ...data, number: newNumber } : person));
          });
      } else return;
    }
    PersonsService
      .add({ name: newName, number: newNumber, id: new String(persons.length + 1) })
      .then(data => {
        setPersons(persons.concat(data));
      })
  };

  const deleteFn = (event, name, id) => {
    event.preventDefault();
    const confirmDelete = confirm(`Delete ${name}?`);
    if (confirmDelete) {
      PersonsService
        .remove(id)
        .then(data => {
          setPersons(persons.filter(person => person.id != data.id));
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChangeFn={event => setFilter(event.target.value)} />
      <h3>Add a new</h3>
      <PersonForm nameOnChangeFn={event => setNewName(event.target.value)} numberOnChangeFn={event => setNewNumber(event.target.value)} addPersonFn={addPerson} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} deleteFn={deleteFn} />
    </div>
  )
}

export default App