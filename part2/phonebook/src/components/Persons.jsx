const Persons = ({ persons, filter }) => {
    return (
        <div>
            {persons.map(person => person.name.toLowerCase().includes(filter.toLowerCase()) && <div key={person.name}>{person.name} {person.number}</div>)}
        </div>
    );
}

export default Persons;