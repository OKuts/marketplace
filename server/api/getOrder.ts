import { Request, Response } from 'express'
import { Order } from '../models/Order'

export const getOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.find()
    res.json(order)
  } catch (e) {
    res
      .status(500)
      .json({ error: e instanceof Error ? e.message : 'error' })
  }
}