import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Template } from '../../model/template.model';
import { RootState } from '../store';

interface TemplatesState {
  templates: Template[];
  isLoaded: boolean;
}

const initialState: TemplatesState = {
  templates: [],
  isLoaded: false,
};

export const templatesSlice = createSlice({
  name: 'templates',
  initialState,
  reducers: {
    setTemplates: (state, action: PayloadAction<Template[]>) => {
      state.templates = action.payload;
      state.isLoaded = true;
    },
  },
});
export const selectTemplates = (state: RootState) => state.templates.templates;
export const selectIsTemplateLoaded = (state: RootState) =>
  state.templates.isLoaded;
export const selectTemplateById = (id: string) => (state: RootState) =>
  state.templates.templates.find((el) => el.id === id);

export const { setTemplates } = templatesSlice.actions;
