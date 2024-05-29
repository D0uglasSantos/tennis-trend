import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-center text-3xl uppercase font-bold pt-20 pb-2 border-b-4 border-bg-green text-black">
      {children}
    </h1>
  );
};

export default Title;
