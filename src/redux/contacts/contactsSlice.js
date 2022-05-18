import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsItemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact(state, action) {
      return [action.payload, ...state];
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(_, action) {
      return action.payload;
    },
  },
});

const contactsReducer = combineReducers({
  [contactsItemsSlice.name]: contactsItemsSlice.reducer,
  [contactsFilterSlice.name]: contactsFilterSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  //   blacklist: ['filter'],
};

export const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const { addContact, deleteContact } = contactsItemsSlice.actions;
export const { changeFilter } = contactsFilterSlice.actions;

export const getContacts = state => state.contacts.items;

export const filterValue = state => state.contacts.filter;
