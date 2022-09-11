import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function PrivateRoutes() {
    const auth = localStorage.getItem('accessToken')
    return (
        auth ? <Outlet /> : <Navigate to='/login' />
    )
}
