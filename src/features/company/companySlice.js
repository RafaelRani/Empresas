import { createSlice } from '@reduxjs/toolkit'

export const companySlice = createSlice({
  name: 'company',
  initialState: {
    companies: []
  },
  reducers: {
    add: (state, action) => {
      state.companies.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.companies.splice(action.payload, 1);
    },
    updateItem: (state, action) => {
      state.companies[action.payload.id] = {...action.payload.empresa};
    }
  }
})

export const { add, deleteItem, updateItem } = companySlice.actions;

export const selectCompanies = (state) => state.company.companies;

export default companySlice.reducer;
