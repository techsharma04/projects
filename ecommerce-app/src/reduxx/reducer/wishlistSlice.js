import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    wishListItems: [],
  };

const wishList = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist(state, action) {
            let itemIndex = state.wishListItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                const filteredWishItems = state.wishListItems.filter(
                    (item) => item.id !== action.payload.id
                );
                state.wishListItems = filteredWishItems;
            } else {
                const tempItem = { ...action.payload, heart: true };
                state.wishListItems.push(tempItem);
            }
        },

        clearWishlist(state, action) {
            state.wishListItems.map(() => {
                const filteredWishItems = state.wishListItems.filter(
                    (item) => item.id !== action.payload.id
                );
                state.wishListItems = filteredWishItems;
            });
        },

        cleanWishlist(state) {
            state.wishListItems = [];
        }
    },
});

export const { addToWishlist, clearWishlist, cleanWishlist } = wishList.actions;
export default wishList.reducer;
