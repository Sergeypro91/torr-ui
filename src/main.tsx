import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Copy, ThemeProvider, ThemeToggle } from '../packages/components/src';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ThemeToggle />
      <div className="outline outline-pink-500">TEST</div>
      <div className="bg-primary text-primary-foreground">Hello</div>
      <Copy clipboardData="TEST" />
    </ThemeProvider>
  </StrictMode>,
);
