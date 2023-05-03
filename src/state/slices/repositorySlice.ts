import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import IRepository from '../../entities/IRepository';

export interface RepositoryState {
  repositories: any[]; // TODO: IRepository
  totalCount: number;
}

const initialState: RepositoryState = {
  repositories: [],
  totalCount: 0,
};

export const repositorySlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {
    // TODO: IRepository
    setRepositories: (state, action: PayloadAction<any[]>) => ({ ...state, repositories: action.payload }),
    setTotalCount: (state, action: PayloadAction<number>) => ({ ...state, totalCount: action.payload }),
  },
  extraReducers: (builder) => {},
});

const { actions, reducer } = repositorySlice;
// Extract and export each action creator by name
export const { setRepositories, setTotalCount } = actions;
// Export the reducer, either as a default or named export
export default reducer;
