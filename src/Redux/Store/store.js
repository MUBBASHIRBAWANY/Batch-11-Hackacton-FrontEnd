import { configureStore } from '@reduxjs/toolkit'
import sidebarOptions from '../Reducers/SiderBarOtionFalse.js'
import sidebarReducer from "../Reducers/sidebarReducer";
import LoginerReducer from '../Reducers/LoginerReducer.js'
import UserReduser from '../Reducers/UserReduser.js';
import departmentReducer from '../Reducers/DepartmentRedusers.js';

import benificiary from '../Reducers/BenifichryRedusers.js';
export const store = configureStore({
    reducer : {
        isSideBar : sidebarReducer,
        sidebarOptions : sidebarOptions,
        loginer : LoginerReducer,
        users   : UserReduser,
        department : departmentReducer,
        benificiary : benificiary
        
    }
})