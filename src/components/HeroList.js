import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { HeroContext } from "../context/HeroContext";
import Hero from "../pages/hero/Hero";

import "./HeroList.css";

export default function HeroList() {
  const { heroes, loading, error, setHeroes, setSelectedHero } = useContext(HeroContext);

  return (
    <div className="HeroList">
      {loading && <div> Loading... </div>}
      {error && <div>{`There was a problem to fetch the data! ${error}`}</div>}
      <div className="hero-list">
        {heroes &&
          heroes
            .sort((a, b) => a.localized_name.localeCompare(b.localized_name))
            .map((item) => (
              <Link to={`/heroes/${item.localized_name}`}>
                <img
                  className="images-heroes"
                  src={"https://api.opendota.com" + item.img}
                  onClick={() => {
                    setSelectedHero(item)
                  }}
                />{" "}
              </Link>
            ))}
      </div>
    </div>
  );
}
