import { createSlice } from '@reduxjs/toolkit';
import { AllToDoThunk } from '../action/AllToDo';

const initialState = {
	load: false,
	AllToDo: [],
	errors: null,
};

const AllToDoSlice = createSlice({
	name: 'AllToDo',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(AllToDoThunk.pending, (state) => {
			return {
				...state,
				load: true,
			};
		}),
			builder.addCase(AllToDoThunk.rejected, (state, { payload }) => {
				return {
					...state,
					load: false,
					errors: payload,
				};
			}),
			builder.addCase(AllToDoThunk.fulfilled, (state, { payload }) => {
				return {
					...state,
					load: false,
					AllToDo: payload,
				};
			});
	},
});

export default AllToDoSlice.reducer;
