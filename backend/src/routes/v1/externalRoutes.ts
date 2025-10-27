import { Router } from 'express';
import * as passwordController from '@/api/v1/external/public/password/controller';

const router = Router();

/**
 * @summary
 * External (public) API routes configuration
 *
 * @module routes/v1/externalRoutes
 *
 * @description
 * Defines public API endpoints that do not require authentication.
 * These endpoints are accessible to all users.
 */

// Password generation routes - /api/v1/external/public/password
router.post('/public/password/generate', passwordController.generateHandler);
router.post('/public/password/analyze', passwordController.analyzeHandler);

export default router;
