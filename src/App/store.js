import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/userslice'

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
})