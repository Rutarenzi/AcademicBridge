import { configureStore } from '@reduxjs/toolkit';

import AllToDoSlice from '../slice/AllToDoSlice';

const store = configureStore({
	reducer: {
		AllTodo: AllToDoSlice,
	},
});

export default store;
