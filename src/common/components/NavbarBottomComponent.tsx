import { NavLink } from "react-router-dom"

const NavbarBottomComponent = () => {

    const links = [
        {
            path: "/",
            label: "Feed",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>,
        },
        {
            path: "/friends",
            label: "Friends",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>,
        },
        {
            path: "/my-account",
            label: "My Account",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>,
        }
    ]

    return (
        <div className="bg-white py-[8px] px-[8px] border-t border-gray-200 grid grid-cols-3 justify-center fixed bottom-0 w-full max-w-md gap-[64px] z-5">
            {links.map(link => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => `grid grid-rows-2 leading-4 gap-[2px] justify-center py-[12px] rounded-3xl ${isActive && 'bg-blue-50 text-blue-700'}`}>
                    {link.icon}
                    <p className="text-[10px]">{link.label}</p>
                </NavLink>
            ))}
        </div>
    )
}

export default NavbarBottomComponent