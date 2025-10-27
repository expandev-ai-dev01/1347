import { getErrorMessageClassName } from './variants';
import type { ErrorMessageProps } from './types';

/**
 * @component ErrorMessage
 * @summary Error message display component
 * @domain core
 * @type ui-component
 * @category feedback
 *
 * @props
 * @param {ErrorMessageProps} props - Component properties
 * @param {string} props.title - Error title
 * @param {string} props.message - Error message
 * @param {Function} props.onRetry - Retry callback
 * @param {Function} props.onBack - Back navigation callback
 *
 * @accessibility
 * - ARIA: role="alert" for error announcements
 * - Keyboard: Buttons are keyboard accessible
 */
export const ErrorMessage = ({ title, message, onRetry, onBack }: ErrorMessageProps) => {
  return (
    <div className={getErrorMessageClassName()} role="alert">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <div className="flex gap-4 justify-center">
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Tentar Novamente
            </button>
          )}
          {onBack && (
            <button
              onClick={onBack}
              className="px-6 py-2 bg-gray-200 text-gray-900 rounded-md hover:bg-gray-300 transition-colors"
            >
              Voltar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
