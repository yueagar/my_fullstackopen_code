import { useState } from "react";

import CountryInfo from "./CountryInfo";

const Country = ({ country }) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div>
            {country.name.common} <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? "hide" : "show"}</button>
            {showInfo && <CountryInfo country={country} />}
        </div>
    );
};

export default Country;