import { model, Schema } from 'mongoose'

export interface ICard {
  name: string;
  category: string;
  price: number;
}

const cardSchema = new Schema<ICard>({
  name: {type: String, require: true},
  category: {type: String, require: true},
  price: {type: Number, require: true},
})

export const Card = model('Card', cardSchema)
