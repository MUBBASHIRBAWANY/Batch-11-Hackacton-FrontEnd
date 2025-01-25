import Login from '../Componants/LoginForm/LoginForm'
import SignupForm from '../Componants/SignupForm/SignupForm'

const AuthRoute = [
    {
        path : '/',
        component : <Login />
    },
    {
        path : '/login',
        component : <Login />
    }

]


export default AuthRoute;