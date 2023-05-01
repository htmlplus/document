import create from 'zustand';

import * as CONSTANTS from '@app/constants';

interface UseStore {
  framework?: string;
  setFramework: (framework: string) => void;
}

export const useStore = create<UseStore>((set) => ({
  framework: CONSTANTS.FRAMEWORK_DEFAULT,
  setFramework: (framework: string) => {
    set({ framework });
  }
}));
