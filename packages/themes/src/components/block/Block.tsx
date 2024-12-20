import { cn } from '@ajk-ui/core'
import { FC } from 'react'
import { Base } from './types'
export const Block: FC<Base> = ({ children, className }) => {
  return <div className={cn('p-4', className)}>{children}</div>
}
