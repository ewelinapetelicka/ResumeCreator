import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Template } from '../../model/template.model';
import { RootState } from '../store';

interface TemplatesState {
  templates: Template[];
}

const initialState: TemplatesState = {
  templates: [],
};

export const templatesSlice = createSlice({
  name: 'templates',
  initialState,
  reducers: {
    setTemplates: (state, action: PayloadAction<Template[]>) => {
      state.templates = action.payload;
    },
  },
});
export const selectTemplates = (state: RootState) => state.templates.templates;
export const { setTemplates } = templatesSlice.actions;
