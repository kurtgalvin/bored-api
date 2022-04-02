import { Router } from "express";
import { body, validationResult } from 'express-validator'

import Controller from './controller'

export default (databaseDriver) => {
  const controller = new Controller(databaseDriver)
  const router = Router()

  router.get('/', async (req, res) => {
    try {
      const user = await controller.getMostRecentUser()
      return res.json(user)
    } catch(errors) {
      return res.status(400).json(errors)
    }
  })

  router.post('/', 
    body('name').isLength({ min: 3 }),
    body('accessibility').isIn(['High', 'Medium', 'Low']),
    body('price').isIn(['Free', 'Low', 'High']),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      try {
        const user = await controller.createUser(req.body)
        return res.status(201).json(user)
      } catch(errors) {
        return res.status(400).json(errors)
      }
    }
  )

  return router
}