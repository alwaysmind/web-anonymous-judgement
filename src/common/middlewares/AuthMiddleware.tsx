import { ReactNode } from "react";
import { useSelector } from "react-redux";

const AuthMiddleware = ({ children, isPrivate }: { children: ReactNode, isPrivate: boolean }) => {
    const user = useSelector((state: any) => state.UserReducer.user)

    if (!user.token && isPrivate) {
        window.location.href = '/login'
    }

    return <>{children}</>
}

export default AuthMiddleware