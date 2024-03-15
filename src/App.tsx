import './App.css';
import { createBrowserRouter, redirect } from 'react-router-dom';
import { RouterProvider, Navigate } from 'react-router-dom';
import React from 'react';
import { Layout } from './Layout';
import { ResumeListPage } from './modules/pages/resume-list-page/ResumeListPage';
import { TemplateListPage } from './modules/template-list/pages/template-list-page/TemplateListPage';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './store/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        loader: async () => redirect('/resumes'),
      },
      {
        path: 'resumes',
        element: <ResumeListPage />,
      },
      {
        path: 'templates',
        element: <TemplateListPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'/resumes'}></Navigate>,
  },
]);

export function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  );
}
