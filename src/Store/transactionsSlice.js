import { createSlice } from "@reduxjs/toolkit";
import * as data from "../transactions_history.json";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: data.transactions,
  },

  reducers: {
    filter: function (state, action) {

      console.log({ data: action.payload });

      if (!action.payload.recipientName && !action.payload.amount) {
        console.log("All are empty ❌");
        state.transactions = data.transactions;
        return;
      }

      const filteredData = data.transactions.filter((object) => {
        if (action.payload.recipientName && action.payload.amount) {
          console.log("filter by both 😍");
          return (
            object.sender.name
              .toLowerCase()
              .includes(action.payload.recipientName.toLowerCase()) &&
            object.amount === action.payload.amount
          );
        }

        if (action.payload.recipientName) {
          console.log("filter only by name");
          console.log({
            object, name: object.sender.name, add: object.sender.name
              .toLowerCase()
              .includes(action.payload.recipientName.toLowerCase())
          });
          return object.sender.name
            .toLowerCase()
            .includes(action.payload.recipientName.toLowerCase())
        }

        if (action.payload.amount) {
          console.log("filter only by amount");
          return object.amount === action.payload.amount
        }

        return false
      });

      console.log(filteredData);

      state.transactions = filteredData
    },
  },
});

export default transactionsSlice.reducer;
export const { filter } = transactionsSlice.actions;
