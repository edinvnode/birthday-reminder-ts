import "./styles.css";

import React, { useState } from "react";
import data from "./data";
import List from "./List";

interface People {
  id: number;
  name: string;
  age: number;
  image: string;
}

function App() {
  const [people, setPeople] = useState<People[]>(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
