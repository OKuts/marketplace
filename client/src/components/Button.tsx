import { FC } from 'react'
import st from './style.modules/Button.module.scss'
import cn from 'classnames'
interface IButtonProps {
  text: string,
  add?: string
}
export const Button: FC<IButtonProps> = ({text, add=''}) => {
  return <button className={cn(st.button, st[add])}>
    {text}
  </button>
}