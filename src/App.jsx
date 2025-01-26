import React, { useState } from 'react'
import './index.css'
import SIdebar from './Componants/SIdebar/SIdebar'
import routes from './utils/routes.jsx'
import { Route, Routes } from 'react-router-dom'
import Header from './Componants/Header/Header.jsx'
import OpensideBar from './Componants/Sidebar/OpensideBar.jsx'
import AuthRoute from '../src/utils/AuthRoute.jsx'
import { useSelector } from 'react-redux'
import { useDispatch } from'react-redux'
import OpenUserSIdebar from '../src/Componants/UserSidebar/UserOpensideBar.jsx'
import UserSIdebar from '../src/Componants/UserSidebar/UserSIdebar.jsx'
import RecSidebar from './Componants/RecSidebar/RecSidebar.jsx'

const App = () => {
  console.log(routes)
  const isLogin = useSelector((state) => state.loginer.state)
  console.log(isLogin)
  return (
    <div>
      {isLogin == "Admin" ? (<div>
        <div>
          <div className="flex h-screen  bg-gray-100">
            {/* Sidebar */}

            <SIdebar />
            <div className="flex-1 flex flex-col">
              <Header />
              <Routes>
                {
                  routes.map((item) => {
                    return <Route key={item.path} path={item.path} element={item.component} />
                  })
                }
              </Routes>

            </div>
            <OpensideBar />
          </div>
        </div>
      </div>) : null}
      {isLogin == "Hod" ? (<div>
        <div>
          <div className="flex h-screen  bg-gray-100">
            {/* Sidebar */}

            <UserSIdebar />
            <div className="flex-1 flex flex-col">
              <Header />
              <Routes>
                {
                  routes.map((item) => {
                    return <Route key={item.path} path={item.path} element={item.component} />
                  })
                }
              </Routes>

            </div>
            <OpensideBar />
          </div>
        </div>
      </div>) : null}
      {isLogin == false ? (<div>
        <Routes>
          {
            AuthRoute.map((item) => {
              return <Route key={item.path} path={item.path} element={item.component} />
            })
          }
        </Routes>
      </div>) : null}
      {
        isLogin == "Rec" ? (
          <div>
            <div>
              <div className="flex h-screen  bg-gray-100">
                {/* Sidebar */}

                <RecSidebar />
                <div className="flex-1 flex flex-col">
                  <Header />
                  <Routes>
                    {
                      routes.map((item) => {
                        return <Route key={item.path} path={item.path} element={item.component} />
                      })
                    }
                  </Routes>

                </div>
                <OpenUserSIdebar />
              </div>
            </div>
          </div>
        )
          : null}

    </div>
  )
}

export default App
