import './App.css';
import { createBrowserRouter, redirect } from 'react-router-dom';
import { RouterProvider, Navigate } from 'react-router-dom';
import React from 'react';
import { Layout } from './Layout';
import { ResumeListPage } from './modules/resume-list/pages/resume-list-page/ResumeListPage';
import { TemplateListPage } from './modules/template-list/pages/template-list-page/TemplateListPage';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { TemplatePreviewPage } from './modules/template-list/pages/template-preview-page/TemplatePreviewPage';
import { TemplateLayout } from './modules/template-list/TemplateLayout';
import { theme } from './theme';
import { NotFoundPage } from './pages/not-found-page/NotFoundPage';
import { ResumeLayout } from './modules/resume-list/ResumeLayout';
import { AuthorizedRoute } from './components/authorized-route/AuthorizedRoute';
import { LoginPage } from './pages/login-page/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        loader: async () => redirect('/templates'),
      },
      {
        path: 'resumes',
        element: (
          <AuthorizedRoute>
            <ResumeLayout />
          </AuthorizedRoute>
        ),
        children: [
          {
            path: '',
            element: <ResumeListPage />,
          },
        ],
      },
      {
        path: 'templates',
        element: <TemplateLayout />,
        children: [
          {
            path: '',
            element: <TemplateListPage />,
          },
          {
            path: ':id',
            element: <TemplatePreviewPage />,
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: '404',
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <Navigate to={'/templates'}></Navigate>,
  },
]);

export function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  );
}
