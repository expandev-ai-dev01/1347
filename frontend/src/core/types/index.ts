export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  timestamp: string;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}
