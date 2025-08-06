import React from 'react';

export default function SubcategoryPanel({ goal }) {
  return (
    <div className="subcategory-panel">
      <h3>{goal.title}</h3>
      <ul>
        {goal.subcategories.map((sub, index) => (
          <li key={index}>{sub}</li>
        ))}
      </ul>
    </div>
  );
}
