const Persons = ({ persons, filter, deleteFn }) => {
    return (
        <div>
            {persons.map(person => person.name.toLowerCase().includes(filter.toLowerCase()) && <div key={person.name}>{person.name} {person.number} <button onClick={event => deleteFn(event, person.name, person.id)}>delete</button></div>)}
        </div>
    );
}

export default Persons;