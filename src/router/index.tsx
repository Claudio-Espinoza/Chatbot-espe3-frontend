import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/chat" replace />
    },
    {
        path: '/chat',
        Component: React.lazy(() => import('@/pages/ChatPage.tsx')),
    },
    {
        path: '/metric',
        Component: React.lazy(() => import('@/pages/MetricPage.tsx')),
    },
]);

export default router;