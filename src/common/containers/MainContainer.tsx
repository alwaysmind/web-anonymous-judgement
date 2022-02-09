import { ReactNode, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { CSSTransition } from "react-transition-group"
import NavbarBottomComponent from "../components/NavbarBottomComponent"
import NavbarTopComponent from "../components/NavbarTopComponent"
import SearchModalComponent from "../components/SearchModalComponent"
import SidebarComponent from "../components/SidebarComponent"

type MainContainerProps = {
    children: ReactNode,
    className?: string,
    isBack?: boolean,
    floatingButton?: ReactNode,
}

const MainContainer = ({ children, className, isBack, floatingButton }: MainContainerProps) => {

    const sidebarRef = useRef(null)
    const searchbarRef = useRef(null)

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const isSearchOpen = useSelector((state: any) => state.GlobalReducer.isSearchOpen)

    return (
        <div className="h-full bg-gray-50 min-h-[100vh] max-h-[100vh] overflow-y-auto overflow-x-hidden max-w-md mx-auto relative">
            <div className={`max-w-md mx-auto relative pb-[16px] mb-[112px] ${className}`}>
                <CSSTransition
                    nodeRef={sidebarRef}
                    in={isSidebarOpen}
                    classNames={"slideIn"}
                    timeout={300}
                    unmountOnExit
                    mountOnEnter={false}>
                    <div className="z-50 bg-blue-400 backdrop-blur-lg bg-opacity-25 w-full h-full fixed max-w-md mx-auto overflow-hidden">
                        <div ref={sidebarRef}>
                            <SidebarComponent onClose={() => setIsSidebarOpen(false)} />
                        </div>
                    </div>
                </CSSTransition>

                <NavbarTopComponent onOpen={() => setIsSidebarOpen(true)} isBack={isBack} />

                {children}

                <NavbarBottomComponent />
            </div>

            <CSSTransition
                nodeRef={searchbarRef}
                in={isSearchOpen}
                classNames={"fadeIn"}
                timeout={300}
                unmountOnExit
                mountOnEnter={false}>
                    <div ref={searchbarRef} className={"fixed bg-white max-w-md w-full z-50 h-full top-0"}>
                        <SearchModalComponent />
                    </div>
            </CSSTransition>

            {floatingButton}
        </div>
    )
}

export default MainContainer