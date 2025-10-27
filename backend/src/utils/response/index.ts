/**
 * @summary
 * Standard API response utilities
 *
 * @module utils/response
 *
 * @description
 * Provides helper functions for creating consistent API responses.
 */

/**
 * @interface SuccessResponse
 * @description Standard success response format
 *
 * @property {boolean} success - Always true for success
 * @property {T} data - Response data
 * @property {Object} [metadata] - Optional metadata
 */
interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    timestamp: string;
    [key: string]: any;
  };
}

/**
 * @interface ErrorResponse
 * @description Standard error response format
 *
 * @property {boolean} success - Always false for errors
 * @property {Object} error - Error details
 */
interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * @summary
 * Creates a success response object
 *
 * @function successResponse
 *
 * @param {T} data - Response data
 * @param {Object} [metadata] - Optional metadata
 *
 * @returns {SuccessResponse<T>} Formatted success response
 *
 * @example
 * res.json(successResponse({ id: 1, name: 'Test' }));
 */
export function successResponse<T>(data: T, metadata?: any): SuccessResponse<T> {
  return {
    success: true,
    data,
    ...(metadata && {
      metadata: {
        ...metadata,
        timestamp: new Date().toISOString(),
      },
    }),
  };
}

/**
 * @summary
 * Creates an error response object
 *
 * @function errorResponse
 *
 * @param {string} message - Error message
 * @param {string} [code] - Error code
 * @param {any} [details] - Additional error details
 *
 * @returns {ErrorResponse} Formatted error response
 *
 * @example
 * res.status(400).json(errorResponse('Invalid input', 'VALIDATION_ERROR'));
 */
export function errorResponse(
  message: string,
  code: string = 'ERROR',
  details?: any
): ErrorResponse {
  return {
    success: false,
    error: {
      code,
      message,
      ...(details && { details }),
    },
    timestamp: new Date().toISOString(),
  };
}
