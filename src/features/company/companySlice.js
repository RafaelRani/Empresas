import { createSlice } from '@reduxjs/toolkit'

export const companySlice = createSlice({
  name: 'company',
  initialState: {
    companies: []
  },
  reducers: {
    add: (state, action) => {
      state.companies.push(action.payload);
    }
  }
})

export const { add } = companySlice.actions;

export const selectCompanies = (state) => state.company.companies;

export default companySlice.reducer;
