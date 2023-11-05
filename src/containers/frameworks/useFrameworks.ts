import { create } from 'zustand';

import * as CONSTANTS from '@/constants';

interface IUseFrameworks {
  framework: string;
  setFramework: (framework: string) => void;
}

export const useFrameworks = create<IUseFrameworks>((set) => ({
  framework: CONSTANTS.FRAMEWORK_DEFAULT,
  setFramework: (framework: string) => {
    set({ framework });
  }
}));
