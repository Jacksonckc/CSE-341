const routes = require('express').Router();
const controller = require('../controller');

// Routes
/**
 * @swagger
 * /contacts:
 *  get:
 *    description: Getting all contacts from the database
 *    responses:
 *      "200":
 *        description: All contacts from the database
 */
routes.get('/', controller.getContacts);

/**
 * @swagger
 * /contacts/{id}:
 *  get:
 *    description: Get one contact from the database
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *    responses:
 *      "200":
 *        description: :id's contact
 */
routes.get('/:id', controller.getContactById);

/**
 * @swagger
 * /contacts:
 *  post:
 *      description: Add a contact to the database
 *      parameters:
 *        - in: body
 *          name: userInfo
 *          required: true
 *          schema:
 *              type: object
 *              required: [firstName]
 *              properties:
 *                  firstName:
 *                      type: string
 *                  lastName:
 *                      type: string
 *                  email:
 *                      type: string
 *                  favoriteColor:
 *                      type: string
 *                  birthday:
 *                      type: string
 *      responses:
 *          "204":
 *              description: contact has been added
 */
routes.post('/', controller.createNewContact);

/**
 * @swagger
 * /contacts/{id}:
 *  put:
 *    description: Modify one contact from the database
 *    parameters:
 *        - in: path
 *          name: id
 *          required: true
 *        - in: body
 *          name: userInfo
 *          required: true
 *          schema:
 *              type: object
 *              required: [firstName]
 *              properties:
 *                  firstName:
 *                      type: string
 *                  lastName:
 *                      type: string
 *                  email:
 *                      type: string
 *                  favoriteColor:
 *                      type: string
 *                  birthday:
 *                      type: string
 *    responses:
 *      "204":
 *        description: contact has been modified
 */
routes.put('/:id', controller.updateContact);

/**
 * @swagger
 * /contacts/{id}:
 *  delete:
 *    description: Remove one contact from the database
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *    responses:
 *      "204":
 *        description: Contact has been deleted
 */
routes.delete('/:id', controller.removeContact);

module.exports = routes;
