import React from 'react'
import {Navigate, useLocation} from 'react-router-dom'

export const RequireAuth = ({children}) => {
    const location = useLocation()
    const userToken=sessionStorage.getItem('token')

    if (!userToken){
        return <Navigate to='/login' state={{path:location.pathname}}/>
    }

  return children
}
