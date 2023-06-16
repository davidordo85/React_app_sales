import React from 'react';

const Badge = ({ index, text }) => {
  const colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
  ];
  const color = colors[index % colors.length];

  return <span className={`badge bg-${color} me-2`}>{text}</span>;
};

export default Badge;
