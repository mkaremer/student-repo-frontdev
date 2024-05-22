import Navbar from "../components/navbar";
import { useState, useEffect } from "react";

const Header = () => {
  return (
    <div className="text-center mt-10">
      <p className="text-5xl font-bold font-sans text-blue-600">
        The List of Countries
      </p>
    </div>
  );
};

const GetCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://cs464p564-frontend-api.vercel.app/api/countries"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCountries();
  }, []);
  return (
    <div className="bg-gray-100 p-5 md:p-14">
      <ul className="list-disc pl-5">
        {countries.map((country) => (
          <li key={country.id} className="mb-2">
            <strong>{country.name}</strong>
            <br />
            Capital: {country.capital}
            <br />
            Population: {country.population}
          </li>
        ))}
      </ul>
    </div>
  );
};

const List = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex-grow p-8 bg-gray-100">
        <Header />
        <GetCountries />
      </div>
    </div>
  );
};

export default List;
