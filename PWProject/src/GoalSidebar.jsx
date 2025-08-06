import React from 'react';

export default function GoalSidebar({ goals, onSelect, selectedGoal }) {
  return (
    <div className="sidebar">
      {goals.map((goal, index) => (
        <div
          key={index}
          className={`sidebar-item ${selectedGoal?.title === goal.title ? 'active' : ''}`}
          onClick={() => onSelect(goal)}
        >
          <div className="sidebar-icon">{goal.icon}</div>
          <div>
            <div className="sidebar-title">{goal.title}</div>
            <div className="sidebar-subtext">{goal.subtext}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
