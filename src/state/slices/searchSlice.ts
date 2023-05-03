import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  searchText: string;
}

const initialState: SearchState = {
  searchText: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => ({ ...state, searchText: action.payload }),
  },
  extraReducers: (builder) => {},
});

const { actions, reducer } = searchSlice;
// Extract and export each action creator by name
export const { setSearchText } = actions;
// Export the reducer, either as a default or named export
export default reducer;
