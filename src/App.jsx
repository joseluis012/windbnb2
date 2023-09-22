import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Stays from "./Navbar/Stays";
import './App.css'

function App() {
  const [city, setCity] = useState(0);
  const [guests, setGuests] = useState(0);

  const setSearch = (city, guests) => {
    if (city != 0) {
      const newCity = city.split(",");
      setCity(newCity[0]);
    } else setCity(0);
    setGuests(guests);
  };

  return (
    <div className="App">
      <Navbar search={setSearch} />
      <Stays city={city} guests={guests} />
    </div>
  );
}

export default App;

























