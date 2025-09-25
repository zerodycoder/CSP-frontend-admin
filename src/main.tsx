import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './theme';
import { AppLayout } from './components/layout/AppLayout';
import { AppRoutes } from './routes';

function App() {
  const [scheme, setScheme] = useState<'light'|'dark'>('dark');
  return (
    <ThemeProvider scheme={scheme}>
      <AppLayout theme={scheme} onThemeChange={setScheme}>
        <AppRoutes />
      </AppLayout>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
