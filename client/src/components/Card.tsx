import { FC } from 'react'
import st from './style.modules/Card.module.scss'
import { Button } from './Button'

const card = {
  title: 'Card',
  price: 23,
  category: 'category',
}
export const Card: FC = () => {
  return <div className={st.card}>
    <div className={st.card__category}>{card.category}</div>
    <h4 className={st.card__title}>{card.title}</h4>
    <div>
      <span className={st.card__dollar}>$</span>
      <span className={st.card__price}>{card.price}</span>
    </div>
    <Button text={'Order'} />
  </div>
}