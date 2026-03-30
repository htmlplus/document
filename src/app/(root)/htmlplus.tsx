'use client';

import { useEffect } from 'react';

import { setConfig } from '@htmlplus/ui/config.js';

import { config } from '@/plus.config';

export function HTMLPLUS() {
	useEffect(() => {
		setConfig(config);
		import('@htmlplus/ui');
	}, []);
	return null;
}
