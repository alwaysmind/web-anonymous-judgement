import { ReactElement } from "react"

type InputCheckComponentProps = {
    label: string | ReactElement,
    isChecked: boolean,
    error: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void,
    rest?: any
}

const InputCheckComponent = ({ label, isChecked, error, onChange, onCheck, ...rest }: InputCheckComponentProps ) => {
    return (
        <div className="px-[6px] pt-[4px]">
            <label className="flex gap-[18px] items-start">
                <input type="checkbox" className="block mt-[5px] scale-[1.2]" checked={isChecked} />
                <div className="text-gray-400 font-[12px]">
                    {label}
                </div>
            </label>
        </div>
    )
}

export default InputCheckComponent