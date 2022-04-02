import { Router } from "express";

import Controller from "./controller";

export default (databaseDriver, boredDriver) => {
  const controller = new Controller(databaseDriver, boredDriver)
  const router = Router()

  router.get('/', async (req, res) => {
    try {
      const activity = await controller.getActivity()
      return res.status(200).json(activity)
    } catch (errors) {
      return res.status(400).json({ errors })
    }
  })

  router.get('/options', async (req, res) => {
    try {
      const activityOptions = await controller.getActivityOptions()
      return res.status(200).json(activityOptions)
    } catch (errors) {
      return res.status(400).json({ errors })
    }
  })

  return router
}