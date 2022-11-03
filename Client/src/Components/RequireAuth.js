import React from 'react'
import {Navigate, useLocation} from 'react-router-dom'

export const RequireAuth = ({children}) => {
    const location = useLocation()
    const userString=sessionStorage.getItem('user')

    if (!userString){
        return <Navigate to='/login' state={{path:location.pathname}}/>
    }

  return children
}
