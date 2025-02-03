import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./HomeLayout";


const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout></HomeLayout> 
    },
    {
        path: '/news',
        element: <h1>News Loyout</h1>
    },
    {
        path: 'auth',
        element: <h1>Login</h1>
    },
    {
        path: '*',
        element: <h1>M Rakib Ahmed</h1>
    }
])


export default router;