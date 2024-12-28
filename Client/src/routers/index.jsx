import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Login from "@/pages/login.jsx";
import SignUp from "@/pages/signup.jsx";
import Forgotpassword from "@/pages/forgotpassword.jsx";
import Home from "@/pages/Home.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children : [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <SignUp />
            },
            {
                path: '/forgot-password',
                element: <Forgotpassword />
            },
            

        ]
    }
])

export default router