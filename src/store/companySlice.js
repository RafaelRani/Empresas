import { createSlice } from '@reduxjs/toolkit'

export const companySlice = createSlice({
  name: 'company',
  initialState: {
    companies: ['a','b', 'c'],
    count: 0,
  },
  reducers: {
    add: (state) => {
      state.count++;
      state.companies.push(state.count);
      console.log(state.companies[state.count]);
    }
  }
})

// exportando o método para adicionar elementos no array 'companies'
export const { add } = companySlice.actions;

//exportando a função para retornar o array 'companies'
export const selectCompanies = (state) => state.companies;

// exportando este reducer
export default companySlice.reducer;
