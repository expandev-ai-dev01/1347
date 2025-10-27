import { Outlet } from 'react-router-dom';
import type { RootLayoutProps } from './types';

/**
 * @component RootLayout
 * @summary Root layout component for the application
 * @domain core
 * @type layout-component
 * @category layout
 *
 * @description
 * Provides the main layout structure for all pages including header and footer.
 * Uses React Router's Outlet for nested route rendering.
 *
 * @routing
 * - Wraps all application routes
 * - Provides consistent layout structure
 */
export const RootLayout = (props: RootLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Gerador de Senhas Seguras</h1>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Sistema Gerador de Senhas Seguras
          </p>
        </div>
      </footer>
    </div>
  );
};
