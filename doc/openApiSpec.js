/**
 * @swagger
 * definitions:
 *   Error:
 *     required:
 *       - message
 *     properties:
 *       code:
 *         type: integer
 *         format: int32
 *       message:
 *         type: string
 */

/**
 * @swagger
 * definitions:
 *   Language:
 *     properties:
 *      key:
 *        type: string
 *      label:
 *        type: string
 */

/**
 * @swagger
 * definitions:
 *   Task:
 *     required:
 *      - taskName
 *      - status
 *     properties:
 *      taskName:
 *        type: string
 *      status:
 *        type: string
 *        enum:
 *          - Pending
 *          - Initializing
 *          - Running
 *          - Finalizing
 *          - Completed
 *          - Error
 *      creationDate:
 *        type: string
 *        format: date-time
 *      startDate:
 *        type: string
 *        format: date-time
 *      efficiency:
 *        type: number
 *        format: double
 *      duration:
 *        type: integer
 *      length:
 *        type: number
 *        format: double
 *      markerBlobUri:
 *        type: string
 *        format: uri
 *      thumbnailUri:
 *        type: string
 *        format: uri
 *      fullImageUri:
 *        type: string
 *        format: uri
 *      user:
 *        type: string
 *      exitCode:
 *        type: integer
 *      company:
 *        type: string
 *      targetDuration:
 *        type: integer
 *      targetEfficiency:
 *        type: number
 *        format: double
 *      fabricWidth:
 *        type: integer
 */

/**
 * Size spec model
 */
/**
 * @swagger
 * definitions:
 *   SizeSpec:
 *     required:
 *       - range
 *       - reference
 *     properties:
 *       range:
 *         type: array
 *         items:
 *           type: string
 *       reference:
 *         type: string
 */

/**
 * Fabric Type model
 */
/**
 * @swagger
 * definitions:
 *   FabricType:
 *     required:
 *       - name
 *       - motifCategories
 *     properties:
 *       name:
 *         type: string
 *       motifCategories:
 *         type: array
 *         items:
 *           type: string
 */

/**
 * Variants models
 */
/**
 * @swagger
 * definitions:
 *   Variant:
 *     required:
 *      - name
 *     properties:
 *      name:
 *        type: string
 *      fabricTypes:
 *        type: array
 *        items:
 *          $ref: '#/definitions/FabricType'
 *      sizes:
 *        type: object
 *        required:
 *          - grada
 *        properties:
 *          grada:
 *            $ref: '#/definitions/SizeSpec'
 *          confo:
 *            $ref: '#/definitions/SizeSpec'
 *          stature:
 *            $ref: '#/definitions/SizeSpec'
 */

/**
 * @swagger
 * definitions:
 *   Quick Consumption Task:
 *     properties:
 *      fabricType:
 *        type: string
 *      status:
 *        type: string
 *        enum:
 *          - Pending
 *          - Initializing
 *          - Running
 *          - Finalizing
 *          - Completed
 *          - Error
 *      creationDate:
 *        type: string
 *        format: date-time
 *      startDate:
 *        type: string
 *        format: date-time
 *      efficiency:
 *        type: number
 *        format: double
 *      duration:
 *        type: integer
 *      length:
 *        type: number
 *        format: double
 *      thumbnailUri:
 *        type: string
 *        format: uri
 *      fullImageUri:
 *        type: string
 *        format: uri
 *      user:
 *        type: string
 *      exitCode:
 *        type: integer
 *      company:
 *        type: string
 *      targetDuration:
 *        type: integer
 *      fabricWidth:
 *        type: integer
 *      estimatedDuration :
 *        type: integer
 */

