import React, { createContext, useContext, useState, useEffect } from 'react';

export const HeroContext = createContext()

export function HeroProvider({ children }) {
    const [heroes, setHeroes] = useState([]);
    const [selectedHero, setSelectedHero] = useState("");
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(`https://api.opendota.com/api/heroStats`)
          .then((response) => {
            console.log("Response", response);
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          .then((actualData) => {
            setHeroes(actualData);
            setError(null);
          })
          .catch((err) => {
            setError(err.message);
            setHeroes(null);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);

    

    return (
        <HeroContext.Provider value={{heroes, selectedHero, setSelectedHero, error, loading }}>
            {children}
        </HeroContext.Provider>
    )
}