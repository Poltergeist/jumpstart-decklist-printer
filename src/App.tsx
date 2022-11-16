import React from "react";
import "./App.css";
import { parse } from "yaml";
import deck from "./test.js";

const parsedDeck = parse(deck);

function App() {
  return (
    <div className="App">
      {Object.entries(parsedDeck).map(
        ([title, list]) => (
          <section className="decklist" key={title}>
            <header>{title}</header>
            <ul>
              {Array.isArray(list)
                ? list.map((card, index) => <li key={`${title}-${index}`}>{card}</li>)
                : null}
            </ul>
          </section>
        )
      )}
    </div>
  );
}

export default App;
