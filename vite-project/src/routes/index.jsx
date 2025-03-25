import { useRoutes } from "react-router-dom";
import NotFound from "../components/NotFound";
import UserDetails from "../components/UserDetails";
import Users from "../components/Users";
import Home from "../pages/Home";
import MainLayout from "../components/MainLayout";
import UserLayout from "../components/UserLayout";

function CustomRoutes() {
    const element = useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { index: true, element: <Home /> },
                { path: "*", element: <NotFound /> }
            ]
        },
        {
            path: "/users",
            element: <UserLayout />,
            children: [
                { index: true, element: <Users /> },
                { path: ":id", element: <UserDetails /> },
                { path: "*", element: <NotFound /> }
            ]
        }
    ])
    return element 
    
}
export default CustomRoutes