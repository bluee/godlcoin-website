import * as React from 'react';

export const TabSelector = ({
  isActive,
  children,
  onClick,
}) => (
  <button
    className={`TabSelector ${
      isActive
        ? 'active'
        : ''
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);