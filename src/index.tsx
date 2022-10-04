import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { server } from 'server/browser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
require('dotenv').config();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('#root Not Found');
}
const root = ReactDOM.createRoot(rootElement);
const isDevMode = process.env.REACT_APP_NODE_ENV === 'development';

console.log('isDevMode', isDevMode);
if (isDevMode) {
  server.start({ onUnhandledRequest: 'bypass' });
}

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={null}>
        <App />
      </React.Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
