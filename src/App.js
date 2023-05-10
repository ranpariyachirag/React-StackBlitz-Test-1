import React from 'react';

import Hero from './Hero';
import Navbar from './Navbar';
import Card from './Card';
import data from './data';

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
