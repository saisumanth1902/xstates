// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const LocationSelector = () => {
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://crio-location-selector.onrender.com/countries")
//       .then((response) => {
//         setCountries(response.data);
//       })
//       .catch((error) => console.error("Error fetching countries:", error));
//   }, []);

//   const handleCountryChange = async (e) => {
//     const country = e.target.value;
//     setSelectedCountry(country);
//     setSelectedState("");
//     setSelectedCity("");
//     setStates([]);
//     setCities([]);
    
//     if (country) {
//       try {
//         const response = await axios.get(
//           `https://crio-location-selector.onrender.com/country=${country}/states`
//         );
//         setStates(response.data);
//       } catch (error) {
//         console.error("Error fetching states:", error);
//       }
//     }
//   };

//   const handleStateChange = async (e) => {
//     const state = e.target.value;
//     setSelectedState(state);
//     setSelectedCity("");
//     setCities([]);
    
//     if (state) {
//       try {
//         const response = await axios.get(
//           `https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${state}/cities`
//         );
//         setCities(response.data);
//       } catch (error) {
//         console.error("Error fetching cities:", error);
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Select Location</h2>
//       <label>Country:</label>
//       <select value={selectedCountry} onChange={handleCountryChange}>
//         <option value="">Select Country</option>
//         {countries.map((country) => (
//           <option key={country} value={country}>{country}</option>
//         ))}
//       </select>
      
//       <label>State:</label>
//       <select value={selectedState} onChange={handleStateChange} disabled={!selectedCountry}>
//         <option value="">Select State</option>
//         {states.map((state) => (
//           <option key={state} value={state}>{state}</option>
//         ))}
//       </select>
      
//       <label>City:</label>
//       <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} disabled={!selectedState}>
//         <option value="">Select City</option>
//         {cities.map((city) => (
//           <option key={city} value={city}>{city}</option>
//         ))}
//       </select>
      
//       {selectedCity && selectedState && selectedCountry && (
//         <p>You selected {selectedCity}, {selectedState}, {selectedCountry}</p>
//       )}
//     </div>
//   );
// };

// export default LocationSelector;





// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const LocationSelector = () => {
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://crio-location-selector.onrender.com/countries")
//       .then((response) => setCountries(response.data))
//       .catch((error) => console.error("Error fetching countries:", error));
//   }, []);

//   const handleCountryChange = async (e) => {
//     const country = e.target.value;
//     setSelectedCountry(country);
//     setSelectedState("");
//     setSelectedCity("");
//     setStates([]);
//     setCities([]);

//     if (country) {
//       try {
//         const response = await axios.get(
//           `https://crio-location-selector.onrender.com/country=${country}/states`
//         );
//         setStates(response.data);
//       } catch (error) {
//         console.error("Error fetching states:", error);
//       }
//     }
//   };

//   const handleStateChange = async (e) => {
//     const state = e.target.value;
//     setSelectedState(state);
//     setSelectedCity("");
//     setCities([]);

//     if (state) {
//       try {
//         const response = await axios.get(
//           `https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${state}/cities`
//         );
//         setCities(response.data);
//       } catch (error) {
//         console.error("Error fetching cities:", error);
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Select Location</h2>

//       {/* <label>Country:</label> */}
//       <select value={selectedCountry} onChange={handleCountryChange}>
//         <option value="">Select Country</option>
//         {countries.length > 0
//           ? countries.map((country) => (
//               <option key={country} value={country}>
//                 {country}
//               </option>
//             ))
//           : null}
//       </select>

//       {/* <label>State:</label> */}
//       <select value={selectedState} onChange={handleStateChange} disabled={!selectedCountry}>
//         <option value="">Select State</option>
//         {states.length > 0
//           ? states.map((state) => (
//               <option key={state} value={state}>
//                 {state}
//               </option>
//             ))
//           : null}
//       </select>
//       {/* <label>City:</label> */}
//       <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} disabled={!selectedState}>
//         <option value="">Select City</option>
//         {cities.length > 0
//           ? cities.map((city) => (
//               <option key={city} value={city}>
//                 {city}
//               </option>
//             ))
//           : null}
//       </select>

//       {selectedCity && selectedState && selectedCountry && (
//         <p>You selected {selectedCity}, {selectedState}, {selectedCountry}</p>
//       )}
//     </div>
//   );
// };

// export default LocationSelector;



import React, { useState, useEffect } from "react";
import axios from "axios";

const LocationSelector = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [error, setError] = useState("");

  // Fetch countries on mount
  useEffect(() => {
    axios
      .get("https://crio-location-selector.onrender.com/countries")
      .then((response) => setCountries(response.data))
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setError("Failed to load countries");
      });
  }, []);

  // Handle country selection
  const handleCountryChange = async (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedState("");
    setSelectedCity("");
    setStates([]);
    setCities([]);
    setError(""); // Reset errors

    if (country) {
      try {
        const response = await axios.get(
          `https://crio-location-selector.onrender.com/country=${country}/states`
        );
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching states:", error);
        setError("Failed to load states");
      }
    }
  };

  // Handle state selection
  const handleStateChange = async (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedCity("");
    setCities([]);
    setError(""); // Reset errors

    if (state) {
      try {
        const response = await axios.get(
          `https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${state}/cities`
        );
        setCities(response.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
        setError("Failed to load cities");
      }
    }
  };

  return (
    <div>
      <h2>Select Location</h2>

      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countries.length > 0
          ? countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))
          : null}
      </select>


      <select value={selectedState} onChange={handleStateChange} disabled={!selectedCountry}>
        <option value="">Select State</option>
        {states.length > 0
          ? states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))
          : null}
      </select>


      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} disabled={!selectedState}>
        <option value="">Select City</option>
        {cities.length > 0
          ? cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))
          : null}
      </select>

      {selectedCity && selectedState && selectedCountry && (
        <p>You selected {selectedCity}, {selectedState}, {selectedCountry}</p>
      )}


      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default LocationSelector;
