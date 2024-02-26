import { RouteObject } from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import TodoPage from "../pages/TodoPage";

const routes : RouteObject[]= [
   {
      element: <TodoPage/>,
      path: '/'
   },
 {
    element: <UsersPage/>,
    path: 'Users'
 }

]

export default routes