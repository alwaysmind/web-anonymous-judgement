import { useState } from "react"
import { useSelector } from "react-redux"
import FriendCardComponent from "../common/components/FriendCardComponent"
import MainContainer from "../common/containers/MainContainer"

const FriendsPage = () => {
    const [activePage, setActivePage] = useState("all")

    const user = useSelector((state: any) => state.UserReducer.user)

    return (
        <MainContainer>
            <div className="mt-[8px] p-[16px] rounded-xl bg-transparent">
                <h4 className="font-medium text-[18px]">Friends</h4>
                <p className="text-[14px] text-gray-600">Your post will be easily informed to your friend by displaying the posts in their feed.</p>

                <div className="flex items-center justify-start gap-[4px] mt-[24px] text-[14px]">
                    <button
                        onClick={() => setActivePage('all')}
                        className={activePage === 'all' ? 'bg-white text-gray-700 px-[12px] shadow-inner py-[8px] rounded-lg text-bold' : 'text-blue-600 text-medium px-[12px] py-[8px]'}>
                        All Friends
                    </button>
                    <button
                        onClick={() => setActivePage('request')}
                        className={activePage === 'request' ? 'bg-white text-gray-700 px-[12px] shadow-inner py-[8px] rounded-lg text-bold' : 'text-blue-600 text-medium px-[12px] py-[8px]'}>
                        Friend Request
                    </button>
                </div>

                {user.followers && user.followers.length > 0 ? (
                    <div className="grid grid-cols-2 gap-[16px] mt-[12px]">
                        {user.followers.map((follower: any) => (
                            <FriendCardComponent />
                        ))}
                    </div>
                ) : (
                    <div className="mt-[32px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto text-gray-300 h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        <p className="text-center mt-[12px] text-[14px] text-gray-400 w-[50%] mx-auto">You currently have no friend. Lets add your friend now.</p>
                    </div>
                )}
            </div>
        </MainContainer>
    )
}

export default FriendsPage