import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IMyLoveState {
	name: string;
}

export const initialState: IMyLoveState = {
	name: 'iu',
};

export const myLoveSlice = createSlice({
	name: 'myLove',
	initialState,
	reducers: {
		setMyLove: (state, action: PayloadAction<string>) => {
			console.log('state ->', state);
			console.log('action ->', action);
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.name = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setMyLove } = myLoveSlice.actions;

export default myLoveSlice.reducer;
