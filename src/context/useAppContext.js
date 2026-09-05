import { useContext } from 'react'
import AppContext from './AppContext.js'

export function useAppContext() {
  return useContext(AppContext)
}
