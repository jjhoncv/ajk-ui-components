import { useAuth } from '@ajk-ui/auth'
import { SignInNav } from '@ajk-ui/login'
import { AccountNav } from './AccountNav'

export const MiniAccount = () => {
  const { isAuthenticated } = useAuth()

  console.log('isAuthenticated', isAuthenticated)

  return (
    <>
      {isAuthenticated ? (
        <AccountNav />
      ) : (
        <>
          <SignInNav />
        </>
      )}
    </>
  )
}
