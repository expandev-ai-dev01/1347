import axios, { AxiosInstance } from 'axios';

/**
 * @configuration apiConfig
 * @summary Central API configuration with environment-based URL management
 * @type api-configuration
 * @category core-library
 */
export const apiConfig = {
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  version: import.meta.env.VITE_API_VERSION || 'v1',
  timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000'),

  get externalUrl(): string {
    return `${this.baseUrl}/api/${this.version}/external`;
  },
};

/**
 * @client publicClient
 * @summary Axios client for PUBLIC API endpoints (no authentication)
 * @type http-client
 * @category core-library
 *
 * @usage
 * Used for endpoints under /api/v1/external/
 * - Password generation
 * - Password analysis
 * - Public resources
 */
export const publicClient: AxiosInstance = axios.create({
  baseURL: apiConfig.externalUrl,
  timeout: apiConfig.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

publicClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    return Promise.reject(error);
  }
);
