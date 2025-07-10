import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {QueryClient,QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import './index.css';
import App from './App.jsx';
import {SpeedInsights} from '@vercel/speed-insights/react';
import {Analytics} from '@vercel/analytics/react';

const queryClient = new QueryClient();

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
