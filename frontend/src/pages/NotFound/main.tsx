import { useNavigate } from 'react-router-dom';
import type { NotFoundPageProps } from './types';

/**
 * @page NotFoundPage
 * @summary 404 error page
 * @domain core
 * @type error-page
 * @category navigation
 *
 * @routing
 * - Path: *
 * - Params: none
 * - Query: none
 * - Guards: none
 *
 * @description
 * Displays a user-friendly 404 error page when users navigate to
 * non-existent routes.
 */
export const NotFoundPage = (props: NotFoundPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Página Não Encontrada</h2>
        <p className="text-gray-600 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Voltar para Início
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
