import { createSlice } from '@reduxjs/toolkit';

// Estado inicial com array de itens do carrinho
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adiciona um item ou aumenta sua quantidade
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Remove item com base no nome
    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },

    // Atualiza a quantidade do item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

// Exporta os actions para usar nos componentes
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Exporta o reducer para configurar a store
export default cartSlice.reducer;
