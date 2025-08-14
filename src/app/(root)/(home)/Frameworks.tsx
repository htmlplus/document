import React from 'react';

import { ROUTES } from '@/constants';
import { frameworks } from '@/data';
import { getPath } from '@/utils';

export const Frameworks: React.FC = () => {
  return (
    <div className="py-20">
      <div>
        <div className="mb-6">
          <h3 className="font-8-600 text-[28px] text-center">All Frameworks, One Place</h3>
        </div>
        <div className="text-sm text-center max-w-[600px] mx-auto mb-6">
          <p className="font-4-400"> Seamlessly supporting all your favorite frameworks in one powerful library.</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-2 sm:flex-row sm:justify-between items-center">
        {frameworks.map((framework) => (
          <a
            key={framework.key}
            className="flex flex-row gap-x-2 sm:gap-x-4 items-center justify-center"
            href={getPath(ROUTES.INSTALLATION_FRAMEWORK, { framework: framework.key })}
          >
            <img className="w-12 h-12 m-0" src={framework.logo} />
            <div className="text-lg sm:text-2xl font-semibold capitalize">{framework.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
};
