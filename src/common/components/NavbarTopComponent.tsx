import { useNavigate } from "react-router-dom"

type NavbarComponentProps = {
    onOpen?: () => void,
    isBack?: boolean,
}

const NavbarTopComponent = ({ onOpen, isBack }: NavbarComponentProps) => {
    
    const navigate = useNavigate()
    
    return (
        <header>
            <nav className="flex justify-between px-[20px] py-[18px] items-center">
                {isBack ? (
                    <button
                        onClick={() => navigate(-1)}
                        className="text-gray-400 active:bg-gray-100 p-[8px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                ) : (
                    <button
                        className="text-gray-400 active:bg-gray-100 p-[8px]"
                        onClick={onOpen}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                )}
                <div className="flex items-center gap-[16px]">
                    <div className="grid grid-cols-2 gap-[12px] border-r border-gray-300 pr-[16px] relative">
                        <button className="px-[8px] py-[8px] aspect-square bg-white rounded-full flex items-center justify-center text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <button className="px-[8px] py-[8px] aspect-square bg-white rounded-full flex items-center justify-center text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>
                            <span className="absolute bg-red-600 top-0 right-[12px] rounded-full aspect-square w-[16px] h-[16px] text-[10px] font-medium flex items-center justify-center">
                                3
                            </span>
                        </button>
                    </div>
                    <button className="bg-blue-600 p-[8px] aspect-square rounded-full flex items-center justify-center font-medium text-white w-[48px] h-[48px]">
                        A
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default NavbarTopComponent