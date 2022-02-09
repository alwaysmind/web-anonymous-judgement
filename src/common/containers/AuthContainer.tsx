import { ReactElement } from "react"

type AuthContainerProps = {
    children?: ReactElement | string | never[]
}

const AuthContainer = ({ children }: AuthContainerProps) => {
    return (
        <div className="h-full bg-white min-h-[100vh] max-h-[100vh] overflow-y-auto overflow-x-hidden max-w-md mx-auto relative">
                {children}
        </div>
    )
}

export default AuthContainer