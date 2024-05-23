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
      <div className="flex flex-wrap gap-6">
        {countries.map((country) => (
          <div
            key={country.id}
            className="bg-white shadow-md p-4 flex items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            {country.flag_png ? (
              <img
                src={country.flag_png}
                alt={`Flag of ${country.name}`}
                className="w-16 h-10 mr-4"
              />
            ) : (
              <div className="w-16 h-10 mr-4 bg-gray-300 flex items-center justify-center">
                <span className="text-sm text-gray-600">No Flag</span>
              </div>
            )}
            <div>
              <strong>{country.name || "Unknown Country"}</strong>
              <br />
              Capital: {country.capital || "Unknown"}
              <br />
              Population: {country.population?.toLocaleString() || "Unknown"}
              <br />
              GDP (in billions):{" "}
              {country.gdp_billions?.toLocaleString() || "Unknown"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const List = () => {
  return (
    <div className="flex h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex-grow p-1 bg-gray-100">
        <Header />
        <GetCountries />
      </div>
    </div>
  );
};

export default List;
