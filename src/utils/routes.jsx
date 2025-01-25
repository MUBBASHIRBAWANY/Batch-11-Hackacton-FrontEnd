import Dashboard from "../Componants/Dashboard/Dashboard";
import Adduser from "../Componants/Users/Adduser";
import UpdateUser from "../Componants/Users/UpdateUser";
import UsersList from "../Componants/Users/UsersList";

const routes = [
    {
        path : '/',
        component : <Dashboard />,
    },
    {
        path : '/users',
        component : <UsersList />,
    },
    {
        path : '/Users/Add',
        component : <Adduser />
    },{
        path : '/Users/Edit/:id',
        component : <UpdateUser />
    }
    

]

export default routes;