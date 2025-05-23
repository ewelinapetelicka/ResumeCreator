import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Resume } from '../../model/resume.model';
import { RootState } from '../store';
import { logOut } from '../user/user.slice';

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
    updateResume: (state, action: PayloadAction<Resume>) => {
      state.resumes = state.resumes.map((resume) => {
        if (resume.id === action.payload.id) {
          return action.payload;
        } else {
          return resume;
        }
      });
    },
    removeResume: (state, action: PayloadAction<number>) => {
      state.resumes = state.resumes.filter(
        (resume) => resume.id !== action.payload,
      );
    },
    addResume: (state, action: PayloadAction<Resume>) => {
      state.resumes.push(action.payload);
    },
    toggleFavoriteResume: (state, action: PayloadAction<number>) => {
      state.resumes = state.resumes.map((resume) => {
        if (resume.id === action.payload) {
          resume.isFavorite = !resume.isFavorite;
        }
        return resume;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logOut, (state) => {
      state.isLoaded = false;
      state.resumes = [];
    });
  },
});

export const selectResumes = (state: RootState) => state.resumes.resumes;
export const selectResumesByFilters = (query: string) => (state: RootState) =>
  state.resumes.resumes.filter((resume) => {
    if (query) {
      return resume.name
        .toLowerCase()
        .trim()
        .includes(query.toLowerCase().trim());
    }
    return true;
  });
export const selectIsResumesLoaded = (state: RootState) =>
  state.resumes.isLoaded;
export const selectResumeById = (id: number) => (state: RootState) =>
  state.resumes.resumes.find((el) => el.id === id);

export const {
  setResumes,
  removeResume,
  updateResume,
  addResume,
  toggleFavoriteResume,
} = resumesSlice.actions;
