import { cn } from '@ajk-ui/core'
import { FC } from 'react'
import { Base } from './types'

export const BlockHeader: FC<Base> = ({ children, className }) => {
  return <div className={cn('', className)}>{children}</div>
}
