import React from "react";

const BlankCard = () => {
  const blankMessage = 'No todos... Do something slacker!'

  return (
    <div
      className={`flex flex-wrap flex-row justify-center items-center sm:flex-col w-full p-5 bg-white rounded-md shadow-xl border-l-4 border-[#f1de05]`}
    >
      <p className="font-normal p-3 break-all">{blankMessage}</p>
    </div>
  );
};

export default BlankCard;
