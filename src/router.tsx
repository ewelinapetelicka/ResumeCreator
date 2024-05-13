import { createBrowserRouter, Navigate, redirect } from 'react-router-dom';
import { Layout } from './Layout.tsx';
import { AuthorizedRoute } from './components/authorized-route/AuthorizedRoute.tsx';
import { ProfilePage } from './modules/profile/pages/profile-page/ProfilePage.tsx';
import { ResumeLayout } from './modules/resume-list/ResumeLayout.tsx';
import { ResumeListPage } from './modules/resume-list/pages/resume-list-page/ResumeListPage.tsx';
import { TemplateLayout } from './modules/templates/TemplateLayout.tsx';
import { TemplateListPage } from './modules/templates/pages/template-list-page/TemplateListPage.tsx';
import { TemplatePreviewPage } from './modules/templates/pages/template-preview-page/TemplatePreviewPage.tsx';
import { LoginPage } from './pages/login-page/LoginPage.tsx';
import { RegisterPage } from './pages/register-page/RegisterPage.tsx';
import { NotFoundPage } from './pages/not-found-page/NotFoundPage.tsx';
import { UnauthorizedPage } from './pages/unauthorized-page/UnauthorizedPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        loader: async () => redirect('/templates'),
      },
      {
        path: 'profile',
        element: (
          <AuthorizedRoute>
            <ProfilePage />
          </AuthorizedRoute>
        ),
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
    path: 'register',
    element: <RegisterPage />,
  },
  {
    path: '404',
    element: <NotFoundPage />,
  },
  {
    path: '401',
    element: <UnauthorizedPage />,
  },
  {
    path: '*',
    element: <Navigate to={'/templates'}></Navigate>,
  },
]);
