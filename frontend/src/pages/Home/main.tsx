import type { HomePageProps } from './types';

/**
 * @page HomePage
 * @summary Home page with password generator interface
 * @domain password
 * @type main-page
 * @category password-management
 *
 * @routing
 * - Path: /
 * - Params: none
 * - Query: none
 * - Guards: none (public)
 *
 * @layout
 * - Layout: RootLayout
 * - Sections: Generator form, password display, strength analysis
 *
 * @description
 * Main page of the application where users can generate secure passwords
 * with customizable parameters and view real-time strength analysis.
 */
export const HomePage = (props: HomePageProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Bem-vindo ao Gerador de Senhas
        </h2>

        <div className="text-center text-gray-600 mb-8">
          <p className="mb-4">Gere senhas seguras e personalizadas com facilidade.</p>
          <p>Configure o tamanho, tipos de caracteres e veja a análise de força em tempo real.</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Recursos Disponíveis:</h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Geração de senhas aleatórias (6-64 caracteres)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Customização de tipos de caracteres</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Análise de força em tempo real (0-100)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Cópia rápida para área de transferência</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Interface responsiva para todos os dispositivos</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            A implementação completa dos recursos será adicionada em breve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
