import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../reduxx/reducer/cartSlice'
import wishlistReducer from '../reduxx/reducer/wishlistSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
})

export default store;