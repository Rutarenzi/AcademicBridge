import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../axiosInstance';

export const AllToDoThunk = createAsyncThunk(
	'AllToDo',
	async (data, { rejectWithValue }) => {
		try {
			const response = await instance.get('/todos');
			return response.data.todos;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
