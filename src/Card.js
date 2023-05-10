import React from 'react';

export default function Card(props) {
  return (
    <div className="card">
      <p className="card--title">{props.title}</p>
    </div>
  );
}
