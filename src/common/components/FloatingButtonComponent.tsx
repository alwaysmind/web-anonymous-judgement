import { ReactNode } from "react"

type FloatingButtonComponentProps = {
    icon?: ReactNode,
    onClick?: () => void,
}

const FloatingButtonComponent = ({ icon, onClick }: FloatingButtonComponentProps) => {
    return (
        <button
            onClick={onClick}
            className="sticky bg-white aspect-square rounded-full p-[24px] text-blue-600 bottom-[105px] left-[80%] shadow-xl border border-gray-200">
            {icon}
        </button>
    )
}

export default FloatingButtonComponent