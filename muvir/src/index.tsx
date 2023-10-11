import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import "./index.scss";

import App from './App';
import MainPage from './MainPage/MainPage';
import NewsPage from './NewsPage/NewsPage';
import AdminPage from './AdminPage/AdminPage';
import SingleNews from './SingleNews/SingleNews';
import EventsPage from './EventsPage/EventsPage';
import SingleEvent from './SingleEvent/SingleEvent';
import SingleRest from './SingleRest/SingleRest';
import RestPage from './RestPage/RestPage';
import ProductsPage from './ProductsPage/ProductsPage';
import InvestPage from './InvestPage/InvestPage';
import Panel from './AdminPage/Panel/Panel';
import Login from './AdminPage/Login/Login';
import EditNewsPage from './AdminPage/EditNewsPage';
import EditMainPage from './AdminPage/EditMainPage';
import EditEventsPage from './AdminPage/EditEventsPage';
import EditProductsPage from './AdminPage/EditProductsPage';
import EditRestPage from './AdminPage/EditRestPage';
import EditInvestPage from './AdminPage/EditInvestPage';

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
                element: <SingleNews />
            },
            {
                path: "events",
                element: <EventsPage />
            },
            {
                path: "events/:eventID",
                element: <SingleEvent />
            },
            {
                path: "rest",
                element: <RestPage />
            },
            {
                path: "rest/:restID",
                element: <SingleRest />
            },
            {
                path: "products",
                element: <ProductsPage />
            },
            {
                path: "invest",
                element: <InvestPage />
            }
        ]
    },
    {
        path: "admin",
        element: <AdminPage />,
        children: [
            {
                index: true,
                element: <Panel />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "news",
                element: <EditNewsPage />
            },
            {
                path: "main",
                element: <EditMainPage />
            },
            {
                path: "events",
                element: <EditEventsPage />
            },
            {
                path: "products",
                element: <EditProductsPage />
            },
            {
                path: "rest",
                element: <EditRestPage />
            },
            {
                path: "invest",
                element: <EditInvestPage />
            }
        ]
    }
]);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

