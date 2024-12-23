import { cn } from '@ajk-ui/core'
import { FC } from 'react'
import { Base } from './types'

export const BlockContent: FC<Base> = ({ children, className }) => {
  return <div className={cn('py-4', className)}>{children}</div>
}
