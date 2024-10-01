import { useState, useEffect } from "react";

import axios from "axios";

import Filter from "./components/Filter";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(response => setCountries(response.data));
  }, []);

  return (
    <>
      <Filter filter={filter} filterFn={event => setFilter(event.target.value)} />
      <Countries countries={countries} filter={filter} />
    </>
  )
}

export default App;