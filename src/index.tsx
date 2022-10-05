import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { server } from 'server/browser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from 'dotenv';
import GlobalSytle from 'assets/GlobalStyle';
config();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('#root Not Found');
}
const root = ReactDOM.createRoot(rootElement);
const isDevMode = process.env.REACT_APP_NODE_ENV === 'development';

if (isDevMode) {
  server.start({ onUnhandledRequest: 'bypass' });
}

const queryClient = new QueryClient();

//TODO: Suspense fallback Loading컴포넌트 추가 가능
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={null}>
        <GlobalSytle />
        <App />
      </React.Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);
