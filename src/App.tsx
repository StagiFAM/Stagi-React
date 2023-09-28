import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import RouterList from './routes';

export default function App() {
  return <MantineProvider>{
        <RouterList/>
    }</MantineProvider>;
}
