import React from "react";

const CardContainer = ({ children }) => {
    return (
      <div className="grid grid-cols-1 space-y-2 w-full items-center justify-center h-full">
        {children}
      </div>
    );
  };
  
  export default CardContainer;
  