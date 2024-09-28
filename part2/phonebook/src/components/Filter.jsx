const Filter = ({ onChangeFn }) => {
    return (
        <form>
            <div>
                filter shown with: <input onChange={onChangeFn} />
            </div>
        </form>
    );
}

export default Filter;