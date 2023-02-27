import { model, Schema } from 'mongoose'

export interface IOrder {
  name: string;
  phone: number;
}

const orderSchema = new Schema<IOrder>({
  name: { type: String, require: true },
  phone: { type: Number, require: true }
})

export const Order = model('Order', orderSchema)
