import { create } from 'zustand';

import * as CONSTANTS from '@/constants';

type FrameworksState = {
	framework: string;
	setFramework: (framework: string) => void;
};

export const useFrameworks = create<FrameworksState>((set) => ({
	framework: CONSTANTS.FRAMEWORK_DEFAULT,
	setFramework: (framework: string) => {
		set({ framework });
	}
}));
