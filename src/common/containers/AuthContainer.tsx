import { ReactElement } from "react"

type AuthContainerProps = {
    children?: ReactElement | string | never[]
}

const AuthContainer = ({ children }: AuthContainerProps) => {
    return (
        <div className="max-w-md mx-auto">
            {children}
        </div>
    )
}

export default AuthContainer