import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      if (
        state.find(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase(),
        )
      ) {
        alert(`${action.payload.name} is already in contacts`);
        return;
      }
      return [...state, action.payload];
    },
    deleteContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});
//создается обьект в contactsSlice у которого уже есть свойство actions, где уже находятся addContact и deleteContact
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
