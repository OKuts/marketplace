import { FC } from 'react'
import st from './style.modules/CardList.module.scss'
import { Card } from './Card'
export const CardList: FC = () => {
  return (
    <div className={st.cardList}>
      {new Array(10).fill(null).map(_ => <Card/>)}
    </div>
  )
}