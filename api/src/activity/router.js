import { Router } from "express";

import Controller from "./controller";

export default (databaseDriver, boredDriver) => {
  const controller = new Controller(databaseDriver, boredDriver)
  const router = Router()

  router.get('/', async (req, res) => {
    const activity = await controller.getActivity()
    res.json(activity)
  })

  router.get('/options', async (req, res) => {
    const activityOptions = await controller.getActivityOptions()
    res.json(activityOptions)
  })

  return router
}