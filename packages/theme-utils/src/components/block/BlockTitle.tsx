import { cn } from '@ajk-ui/core'
import { FC } from 'react'
import { Base } from './types'

export const BlockTitle: FC<Base> = ({ children, className }) => {
  return <div className={cn('py-4 font-semibold', className)}>{children}</div>
}
