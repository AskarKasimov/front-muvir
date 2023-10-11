import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import "./index.scss";

import App from './App';
import MainPage from './MainPage/MainPage';
import NewsPage from './NewsPage/NewsPage';
import NewsItem from './NewsItem/NewsItem';
import AdminPage from './AdminPage/AdminPage';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: "news",
                element: <NewsPage />
            },
            {
                path: "news/:newsID",
                element: <NewsItem />
            }
        ]
    },
    {
        path: "admin",
        element: <AdminPage />
    }
]);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

