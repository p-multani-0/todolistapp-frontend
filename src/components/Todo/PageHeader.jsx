import React from 'react';

const PageHeader = ({ children }) => {
  return (
    <div className="grid grid-cols-2 gap-8 py-8 items-start justify-center sm:py-8 sm:flex-row sm:justify-between">
      {children}
    </div>
  );
};

export default PageHeader;
