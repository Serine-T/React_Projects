import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  if(people.length) {
    return (
      <main>
        <section className='container'>
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>clear all</button>
        </section>
      </main>
    )
  }
  return (
    <main>
    <section className='container'>
      <h3>0 anniversary!</h3>
    </section>
  </main>
  );
}

export default App
