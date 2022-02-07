import { ReactElement } from "react"

type InputComponentProps = {
    placeholder: string,
    type: string,
    icon: ReactElement,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    error: string,
    rest?: any
}

const InputComponent = ({ placeholder, type, icon, onChange, value, error, ...rest }: InputComponentProps) => {
    return (
        <div className="border-b border-gray-200 flex overflow-hidden items-center gap-[16px]">
            <span className="text-gray-400">
                {icon}
            </span>
            <input
                type={type}
                placeholder={placeholder}
                className="outline-none block w-full py-[12px] placeholder-gray-400 font-bold"
                value={value}
                onChange={onChange}
                {...rest} />
        </div>
    )
}

export default InputComponent