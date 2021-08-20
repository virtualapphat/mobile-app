import { configureStore, createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		data: null,
	},
	reducers: {
		setUser: (state, action) => {
			state.data = action.payload;
			return state;
		},
	},
});

// Action creators are generated for each case reducer function
export const Actions = {
	user: userSlice.actions,
};

export const Selectors = {
	getUser: state => state.user.data,
};

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
	},
});
