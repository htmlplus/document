import React from 'react';

import { FrameworkIcons } from '@/data/Framework-icons';

const Frameworks: React.FC = () => {
  const IF = [
    {
      name: 'angular',
      icon: <FrameworkIcons.angular width={60} height={60} className="md:size-[60px] size-12"/>,
    },
    {
      name: 'javascript',
      icon: <FrameworkIcons.javascript width={60} height={60} className="md:size-[60px] size-12"/>,
    },
    {
      name: 'reactjs',
      icon: <FrameworkIcons.reactjs width={60} height={60} className="md:size-[60px] size-12"/>,
    },
    {
      name: 'svelte',
      icon: <FrameworkIcons.svelte width={60} height={60} className="md:size-[60px] size-12"/>,
    },
    {
      name: 'vue',
      icon: <FrameworkIcons.vue width={60} height={60} className="md:size-[60px] size-12"/>,
    },
  ];

  return (
    <div className="py-20 framework ">
      <div>
        <div className="mb-6">
          <h3 className="text-[28px]   text-center  title ">
            All Frameworks, One Place
          </h3>
        </div>
        <div className="text-sm  text-center  max-w-[600px] mx-auto mb-6">
          <p>
            {' '}
            Seamlessly supporting all your favorite frameworks in one powerful platform.
          </p>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center gap-6 tablet:gap-2  tablet:flex-row tablet:justify-between items-center ">
        {IF.map((item, index) => (
          <div key={index} className="flex flex-row gap-x-2 tablet:gap-x-4 items-center justify-center">
            <div className="size-12">{item.icon}</div>
            <div className="text-lg tablet:text-2xl font-semibold capitalize">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frameworks;
