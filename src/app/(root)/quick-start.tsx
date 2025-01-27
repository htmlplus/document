import React from 'react';

const QuickStart = () => {
  return (
    <div className="footer bg-[#F8F8F8] px-4 py-0 tablet:py-6  quick-start">
      <div className="mb-6">
        <h4 className="text-[28px]   text-center  title">
          Everything is ready; <br /> just start!
        </h4>
      </div>
      <div className="text-sm  text-center  max-w-[600px] mx-auto ">
        <p>
          {' '}
          With HTMLPLUS, all the tools you need are at your fingertips customizable, lightweight, and ready to power
          your next project. Just start!
        </p>
      </div>
      <div className="mt-8 mb-16 gap-4 flex flex-col laptop:flex-row  justify-center items-center w-full">
        <button className="w-full tablet:w-1/2 laptop:w-[200px] laptop:mb-0 code-snippet">Quick start</button>
        <button className="w-full tablet:w-1/2 laptop:w-[130px] ">Components</button>
      </div>
    </div>
  );
};

export default QuickStart;
