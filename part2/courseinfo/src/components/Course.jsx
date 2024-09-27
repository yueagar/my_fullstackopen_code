const Header = ({ course }) => <h3>{course}</h3>;

const Total = ({ sum }) => <b>total of {sum} exercises</b>;

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>;

const Content = ({ parts }) =>
  <>
    {parts.map(part => <Part key={part.id} part={part} />)}
  </>;

const Course = ({ course }) => {
  const { name, parts } = course;
  // accumulator is initialized to 0, and then adding up the numbers of exercises.
  const sum = parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total sum={sum} />
    </div>
  );
};

export default Course;