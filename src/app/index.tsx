import {useState} from 'react';

import ReactLogo from '@shared/assets/react.svg';
import ViteLogo from '@shared/assets/vite.svg';

export function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div>
        <ReactLogo />
        <ViteLogo />
      </div>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </>
  );
}
