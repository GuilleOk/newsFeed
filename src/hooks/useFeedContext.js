import { useContext } from 'react'
import { FeedContext } from '../context/FeedContext'

export const useFeedContext = () => {
  const context = useContext(FeedContext)

  if (context === undefined) {
    throw new Error('Se debe de usar el provider')
  }
  
  return context
}