import { AnyAction, configureStore } from '@reduxjs/toolkit'

import combinedReducer from './combinedReducer'

export const reducer = (
  state: ReturnType<typeof combinedReducer> | undefined,
  action: AnyAction
) => {
 

  if (action.type === 'store/reset') {
    return combinedReducer(undefined, action)
  }

  return combinedReducer(state, action)
}

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppState = ReturnType<typeof reducer>
