import { useDispatch } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { logout } from "../../api/services/AuthService"

type SidebarComponentProps = {
    onClose: () => void,
}

const SidebarComponent = ({ onClose }: SidebarComponentProps) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = async () => {
        logout({ id: '' }).then((res: any) => {
            dispatch({
                type: "SET_USER",
                payload: {}
            })
    
            setTimeout(() => {
                navigate('/login')
            }, 300)
        }).catch(err => {
            console.log(err)
        })
    }

    const menus = [
        {
            label: "Features",
            items: [
                {
                    label: "Feed",
                    path: "/",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                },
                {
                    label: "Friends",
                    path: "/friends",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>,
                },
                {
                    label: "My Account",
                    path: "/my-account",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>,
                },
                {
                    label: "Settings",
                    path: "/settings",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                }
            ]
        },
        {
            label: "Information",
            items: [
                {
                    label: "About us",
                    path: "/about-us",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                }
            ]
        }
    ]

    return (
        <div className="fixed w-[280px] bg-white min-h-screen z-50 shadow-sm py-[32px] px-[24px]">
            <div className="absolute right-[16px] top-[16px]">
                <button onClick={onClose} className="p-[8px] active:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="bg-white">
                <div className="flex items-center gap-[16px]">
                    <div className="bg-blue-700 text-white aspect-square w-[42px] flex items-center justify-center rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h1 className="font-medium text-[18px]">Anojudge</h1>
                </div>

                <div className="bg-gray-50 px-[16px] py-[12px] mt-[24px] rounded-xl flex gap-[12px]">
                    <div className="bg-white aspect-square w-[42px] h-[42px] border border-gray-100 rounded-full text-[18px] flex items-center justify-center">
                        😊
                    </div>
                    <div>
                        <h6 className="font-medium">Adinda Samitra</h6>
                        <p className="text-[14px] text-gray-500">@adindasamitra</p>
                    </div>
                </div>

                {menus.map(menu => (
                    <div className="mt-[32px]" key={menu.label}>
                        <h6 className="font-medium">{menu.label}</h6>

                        <div className="grid grid-cols-1 gap-[16px] mt-[8px]">
                            {menu.items.map(item => (
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => `flex items-center gap-[16px] py-[16px] px-[24px] rounded-lg ${isActive && 'text-blue-700 bg-blue-50'}`}
                                    key={item.label}>
                                    <div>
                                        {item.icon}
                                    </div>
                                    <div>
                                        {item.label}
                                    </div>
                                </NavLink>
                            ))}
                            <div
                                onClick={() => handleLogout()}
                                className={`flex items-center gap-[16px] py-[16px] px-[24px] rounded-lg cursor-pointer`}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </div>
                                <div>
                                    Logout
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SidebarComponent