import React, { createContext, useContext, useState } from 'react';

export const HeroContext = createContext()

export function HeroProvider({ children }) {
    const [heroes, setHeroes] = useState({});
    const [selectedHero, setSelectedHero] = useState("");

    return (
        <HeroContext.Provider value={{heroes, setHeroes, selectedHero, setSelectedHero}}>
            {children}
        </HeroContext.Provider>
    )
}