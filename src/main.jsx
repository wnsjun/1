import { StrictMode } from 'react';
import { createRoot,QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import './index.css';
import App from './App.jsx';
import {SpeedInsights} from '@vercel/speed-insights';

const queryClient = new queryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Analytics/>
      <SpeedInsights/>
      <ReactQueryDevtools initialIsopen={true}/>
    </QueryClientProvider>
  </StrictMode>
);
