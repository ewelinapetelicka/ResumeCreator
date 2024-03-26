import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Resume } from '../../model/resume.model';
import { RootState } from '../store';

interface ResumesState {
  resumes: Resume[];
  isLoaded: boolean;
}

const initialState: ResumesState = {
  resumes: [],
  isLoaded: false,
};

export const resumesSlice = createSlice({
  name: 'resumes',
  initialState,
  reducers: {
    setResumes: (state, action: PayloadAction<Resume[]>) => {
      state.resumes = action.payload;
      state.isLoaded = true;
    },
  },
});

export const selectResumes = (state: RootState) => state.resumes.resumes;
export const selectLoadedResumes = (state: RootState) => state.resumes.isLoaded;
export const { setResumes } = resumesSlice.actions;
