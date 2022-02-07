import { ReactNode, useRef, useState } from "react"
import { CSSTransition } from "react-transition-group"
import NavbarBottomComponent from "../components/NavbarBottomComponent"
import NavbarTopComponent from "../components/NavbarTopComponent"
import SidebarComponent from "../components/SidebarComponent"

type MainContainerProps = {
    children: ReactNode,
    className?: string,
    isBack?: boolean,
    floatingButton?: ReactNode,
}

const MainContainer = ({ children, className, isBack, floatingButton }: MainContainerProps) => {

    const sidebarRef = useRef(null)

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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

            {floatingButton}
        </div>
    )
}

export default MainContainer