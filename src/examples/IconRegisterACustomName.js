/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useState } from 'react';
import '@htmlplus/ui/center.js';
import '@htmlplus/ui/icon.js';
import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  asset: {
    icon: {
      'custom-logo': `
              <svg viewBox="0 0 1000 1000">
                <path d="M980.8,521.1L783.2,718.5c-12.2,12.2-32,12.2-44.2,0c-12.2-12.2-12.2-31.9,0-44.1L914.6,499L739,323.7c-12.2-12.2-12.2-31.9,0-44.1c12.2-12.2,32-12.2,44.2,0L980.8,477C993.1,489.2,993.1,508.9,980.8,521.1z M332.9,906.5c-9,15.7-28.9,21.1-44.5,12c-15.6-9-20.9-29.1-11.9-44.8L667.1,93.5c9-15.7,28.9-21.1,44.5-12c15.6,9.1,20.9,29.1,11.9,44.8L332.9,906.5z M261,718.5c-12.2,12.2-32,12.2-44.2,0L19.1,521.1C7,508.9,7,489.2,19.1,477l197.7-197.4c12.2-12.2,32-12.2,44.2,0c12.2,12.2,12.2,31.9,0,44.1L85.4,499L261,674.4C273.2,686.6,273.2,706.3,261,718.5z" />
              </svg>
            `
    }
  }
});



function App() {
  return (
    <plus-center>
      <plus-icon name="custom-logo" size="5x"></plus-icon>
    </plus-center>
  );
}

const IconRegisterACustomName = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="ex-preview ex-icon-register-a-custom-name">
      {ready && <App />}
    </div>
  )
};

export default IconRegisterACustomName;
