import { redirect } from 'react-router-dom'
import { Session } from '@/utils/types'

export const authLoader = () => {
  console.log('loaderrr')
  const session: Session = JSON.parse(localStorage.getItem('session')!)
  console.log(session, 'sdghi')
  if (session?.user?.isLoggedIn) {
    return redirect('/')
  }
  return null
}

export const feedLoader = () => {
  const session: Session = JSON.parse(localStorage.getItem('session')!)
  console.log(session, 'sdghi')
  // if (session.expiry!<new Date()) {
    
  // }
  

  return null
}
export const rootLoader = async () => {
  return null
}
