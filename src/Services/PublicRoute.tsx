import { JSX } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

interface ProtectedRouteProps {
  children: JSX.Element
  allowedRoles?: string[]
}

const PublicRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = useSelector((state: any) => state.jwt.token)

  console.log("🔍 PublicRoute Token:", token)

  if (token && token !== "") {
    return <Navigate to="/" />
  }

  return children
}

export default PublicRoute
