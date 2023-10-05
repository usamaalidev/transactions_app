import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./transactionsSlice.js"

const store = configureStore({
  reducer: {
    transactionReducer
  }
})

export default store;