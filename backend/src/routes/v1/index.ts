import { Router } from 'express';
import externalRoutes from '@/routes/v1/externalRoutes';

const router = Router();

/**
 * @summary
 * V1 API router configuration
 *
 * @module routes/v1
 *
 * @description
 * Configures version 1 API routes, separating external (public) endpoints.
 * Routes are organized by access level for better security and maintainability.
 */

// External (public) routes - /api/v1/external/...
router.use('/external', externalRoutes);

export default router;
