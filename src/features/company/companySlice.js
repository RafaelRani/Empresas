import { createSlice } from '@reduxjs/toolkit'

export const companySlice = createSlice({
  name: 'company',
  initialState: {
    companies: [
      { razaoSocial: 'a', atividade: 'a1' },
      { razaoSocial: 'b', atividade: 'b1' },
      { razaoSocial: 'c', atividade: 'c1' },
    ],
    count: 0,
  },
  reducers: {
    add: (state, action) => { //action: dados recebidos em: dispach(add(dados))
      state.count++;
      state.companies.push(action.payload); //action.payload = valor do dado recebido
    }
  }
})

// exportando o método para adicionar elementos no array 'companies'
export const { add } = companySlice.actions;

//exportando a função para retornar o array 'companies'
export const selectCompanies = (state) => state.company.companies;

// exportando este reducer
export default companySlice.reducer;
