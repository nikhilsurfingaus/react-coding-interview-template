import "./shared.css";
import { useState } from "react";
import { Countries } from "../types/types";

const Dropdown = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showRes, setShowRes] = useState<boolean>(false);
  const [cityIndex, setCityIndex] = useState<number>(0);

  const countries: Countries = [
    {
      name: "Australia",
      value: "AUS",
      cities: ["Sydney", "Gold Coast"]
    },
    {
      name: "United States",
      value: "USA",
      cities: ["Kansas", "Albuquerque", "Salt Lake City"]
    },
    {
      name: "Canada",
      value: "CAN",
      cities: ["Toronto", "Vancouver"]
    },
    {
      name: "Brazil",
      value: "BRA",
      cities: ["Sao Paulo", "Rio de Janeiro", "Brasilia"]
    },
    {
      name: "Netherlands",
      value: "NED",
      cities: ["Amsterdam"]
    }
  ];

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;
    setCurrentIndex(selectedIndex);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;
    setCityIndex(selectedIndex);
  };

  const handleReset = () => {
    setShowRes(false);
    setCityIndex(0);
  };

  return (
    <div className="main">
      <h1>Dropdown</h1>
      <div className="content mt-3">
        <select onChange={handleCountryChange} onClick={() => handleReset()}>
          {countries.map((place, i) => (
            <option key={i} value={i}>
              {place.name}
            </option>
          ))}
        </select>
      </div>
      <div className="content mt-3">
        <select onChange={handleCityChange}>
          {countries[currentIndex].cities.map((city, i) => (
            <option key={i} value={i}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className="content mt-3">
        <button onClick={() => setShowRes(true)} className="btn btn-success">
          Submit
        </button>
      </div>
      {showRes ? (
        <div className="content mt-3">
          <p>Country: {countries[currentIndex].name} </p>
          <p>City: {countries[currentIndex].cities[cityIndex]} </p>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
