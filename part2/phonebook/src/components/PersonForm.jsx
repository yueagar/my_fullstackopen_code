const PersonForm = ({ nameOnChangeFn, numberOnChangeFn, addPersonFn }) => {
  return (
    <form>
      <div>
        name: <input onChange={nameOnChangeFn} />
      </div>
      <div>
        number: <input onChange={numberOnChangeFn} />
      </div>
      <div>
        <button type="submit" onClick={addPersonFn}>add</button>
      </div>
    </form>
  );
};

export default PersonForm;