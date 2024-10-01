import Weather from "./Weather";

const CountryInfo = ({ country }) => {
    return (
        <>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital[0]}</div>
            <div>area {country.area}</div>
            <h2>languages</h2>
            <ul>
                {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="20%" height="20%" />
            <h2>Weather in {country.capital[0]}</h2>
            <Weather latlng={country.capitalInfo.latlng} />
        </>
    );
};

export default CountryInfo;