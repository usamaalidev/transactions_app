import { createSlice } from "@reduxjs/toolkit";
import * as data from "../transactions_history.json";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: data.transactions,
  },

  reducers: {
    filter: function (state, action) {
      const filteredData = data.transactions.filter((object) => {
        if (action.payload.recipientName && action.payload.amount) {
          return (
            object.sender.name
              .toLowerCase()
              .includes(action.payload.recipientName.toLowerCase()) &&
            object.amount === action.payload.amount
          );
        }

        if (action.payload.recipientName) {
          return object.sender.name
            .toLowerCase()
            .includes(action.payload.recipientName.toLowerCase())
        }

        if (action.payload.amount) {
          return object.amount === action.payload.amount
        }

        return false
      });

      state.transactions = filteredData
    },
  },
});

export default transactionsSlice.reducer;
export const { filter } = transactionsSlice.actions;
