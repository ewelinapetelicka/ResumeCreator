import './App.css';
import {createBrowserRouter, redirect} from "react-router-dom";
import {RouterProvider, Navigate} from "react-router-dom";
import React from 'react';
import {Layout} from "./Layout";
import {ResumeListPage} from "./modules/pages/resume-list-page/ResumeListPage";
import {TemplateListPage} from "./modules/pages/templeate-list-page/TemplateListPage";

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
                element: <ResumeListPage/>,
            },
            {
                path: 'templates',
                element: <TemplateListPage/>
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to={'/resumes'}></Navigate>
    }
]);

export function App() {
    return (
            <RouterProvider router={router}/>
    );
}
