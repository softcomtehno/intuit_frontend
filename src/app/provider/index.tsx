import { QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '~shared/lib/react-query/react-query.lib';
import { CustomThemeProvider } from './theme.provider';
import { BrowserRouter } from './router.provider';
import { HelmetProvider } from 'react-helmet-async';

export function App() {
  return (
    <HelmetProvider>
      <TanStackQueryClientProvider client={queryClient}>
        <CustomThemeProvider>
          <BrowserRouter />
        </CustomThemeProvider>
      </TanStackQueryClientProvider>
    </HelmetProvider>
  );
}
