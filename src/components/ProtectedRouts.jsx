import React from 'react'
import { Outlet } from 'react-router-dom'
import { LoginContext } from './Contexts/LoginContext'
import { useContext } from 'react'
import LandingPage from '../components/LandingPage'

const useAuth = () => {
    const {isUploaded, nameEntered} = useContext(LoginContext)
    console.log(isUploaded, nameEntered)
    
    const user = isUploaded && nameEntered 
    return user && isUploaded && nameEntered
    
}

const ProtectedRouts = () =>{
    const isAuth = useAuth()
   

  return isAuth ? <Outlet/> : <LandingPage/>
 
}

export default ProtectedRouts