import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import { body, validationResult } from 'express-validator'
import 'dotenv/config'

import { Card } from './models/Card'
import { Order } from './models/Order'
import { EnvConfig } from './services/env.config'
import { root } from './api/root'
import { getOrder } from './api/getOrder'

const app = express()
const env = new EnvConfig()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('../client/dist'))
const start = async () => {
  try {

    await mongoose.connect(env.get('MONGO_URL'))
    app.listen(env.get('PORT'), () => {
      console.log('Server start ...')
    })
  } catch (e) {
    console.log('Error connecting to DB...')
    process.exit(1)
  }
}

app.get('/', root)
app.get('/api/order', getOrder)
app.get('/api/cards', async (req, res) => {
  try {
    const cards = await Card.find()
    res.json(cards)
    console.log(cards)
  } catch (e) {
    res
      .status(500)
      .json({ error: e instanceof Error ? e.message : 'error' })
  }
})

app.post('/api/order',
  body('name').isLength({ min: 6 }),
  body('phone').isNumeric(),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req)
      const { name, phone } = req.body
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        })
      }
      const order = new Order({ name, phone })
      await order.save()
      res.json(order)
    } catch (e) {
      res
        .status(500)
        .json({ error: e instanceof Error ? e.message : 'error' })
    }
  })

start()
