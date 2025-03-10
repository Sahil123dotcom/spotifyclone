import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Public } from './Public';




const Routes = () => {
  
    const PublicRoutes = () => {

        return [...Public];

    }
    return <RouterProvider router={createBrowserRouter(PublicRoutes())} />;
};

export default Routes;
