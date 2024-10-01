import Country from "./Country";
import CountryInfo from "./CountryInfo";

const Countries = ({ countries, filter }) => {
    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()));
    return (
        <>
            {filteredCountries.length > 10 ? <div>Too many matches, specify another filter</div> : filteredCountries.length == 1 ? <CountryInfo country={filteredCountries[0]} /> : filteredCountries.map(country => <Country key={country.name.common} country={country} />)}
        </>
    );
};

export default Countries;