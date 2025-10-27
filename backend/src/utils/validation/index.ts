import { z } from 'zod';

/**
 * @summary
 * Reusable Zod validation schemas
 *
 * @module utils/validation
 *
 * @description
 * Provides common validation schemas and utilities for request validation.
 */

/**
 * @constant zString
 * @description Basic string validation
 */
export const zString = z.string().min(1);

/**
 * @constant zNumber
 * @description Basic number validation
 */
export const zNumber = z.number();

/**
 * @constant zBoolean
 * @description Basic boolean validation
 */
export const zBoolean = z.boolean();

/**
 * @constant zPositiveNumber
 * @description Positive number validation
 */
export const zPositiveNumber = z.number().positive();

/**
 * @constant zNonNegativeNumber
 * @description Non-negative number validation
 */
export const zNonNegativeNumber = z.number().nonnegative();

/**
 * @constant zEmail
 * @description Email validation
 */
export const zEmail = z.string().email();

/**
 * @constant zUrl
 * @description URL validation
 */
export const zUrl = z.string().url();

/**
 * @constant zUuid
 * @description UUID validation
 */
export const zUuid = z.string().uuid();

/**
 * @constant zDate
 * @description Date string validation
 */
export const zDate = z.string().datetime();

/**
 * @constant zOptionalString
 * @description Optional string validation
 */
export const zOptionalString = z.string().optional();

/**
 * @constant zNullableString
 * @description Nullable string validation
 */
export const zNullableString = z.string().nullable();
