import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/technology.json"),
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <App /> */}
        <RouterProvider router={router} />
    </StrictMode>
);
