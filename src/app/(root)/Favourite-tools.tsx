import React from 'react';
import Image from 'next/image';
import { frameworks } from '@/data';
const FavouriteTools = () => {
  return (
    <div className="w-full  favourite-tools ">
      <div className="w-full flex justify-center flex-col items-center text-center gap-y-6">
        <h3>
          A Universal Syntax for the <br /> Web
        </h3>

        <p className="max-w-[600px]">
          Web Components provide a unified syntax for creating reusable elements that work across all frameworks and web
          environments
        </p>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-y-12 gap-x-8 pt-16 mb-14">
        {frameworks.map((frameworks, i) => (
          <div className=" flex justify-center flex-col    w-full h-[182px] rounded-[20px] bg-[#F8F8F8] px-6 pb-6"  key={i}>
            <div className="w-full h-fit  flex justify-center">
              <div className=" size-16 bg-[#858585]/50 rounded-lg -mt-12">
                {/*<Image src={frameworks.logo} alt={frameworks.title} width={64} height={64} />*/}
              </div>
            </div>
            <div className="w-full  mt-8 text-center">
              <h3 className="frameworks-title">
                {frameworks.title}
              </h3>
              <p className="frameworks-des">
                Boost your design by connecting directly to Linear.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteTools;
