import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/core/lib/queryClient';
import { AppRouter } from '@/app/router';

/**
 * @component App
 * @summary Root application component
 * @domain core
 * @type root-component
 * @category application
 *
 * @description
 * Main application component that wraps the entire app with necessary providers
 * including React Query for server state management and routing.
 */
export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
};
