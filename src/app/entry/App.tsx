import React from 'react';
import { AppProviders } from '@/app/providers/AppProviders';
import { Router } from '@/routes/Router';

function App() {
  return (
    <AppProviders>
      <Router />
    </AppProviders>
  );
}

export default App;