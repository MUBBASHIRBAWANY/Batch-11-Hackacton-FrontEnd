import BenifichryList from "../Componants/Benifichry/BenifichryList";
import Dashboard from "../Componants/Dashboard/Dashboard";
import AddDeparment from "../Componants/Department/DepartmentAdd";
import DepartmentEdit from "../Componants/Department/DepartmentEdit";
import DepartmentList from "../Componants/Department/DepartmentList";
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
    },
    {
        path : '/Department',
        component : <DepartmentList />
    },
    {
        path : '/Department/Add',
        component : <AddDeparment />
    },{
        path : '/Department/Edit/:id',
        component : <DepartmentEdit />
    },{
        path : '/Benifichry',
        component : <BenifichryList />
    }
    

]

export default routes;