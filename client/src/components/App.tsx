import { FC } from 'react'
import st from './style.modules/App.module.scss'
import { CardList } from './CardList'
import { Button } from './Button'
export const App: FC = () => {
  return (
    <div className={st.app}>
      <div className={'wrapper'}>
        <CardList/>
        <Button text={'Order'} add={'big'}/>
      </div>
    </div>
  )
}

