import FriendCardComponent from "../common/components/FriendCardComponent"
import MainContainer from "../common/containers/MainContainer"

const FriendsPage = () => {
    return (
        <MainContainer>
            <div className="mt-[8px] p-[16px] rounded-xl bg-transparent">
                <h4 className="font-medium text-[18px]">Friends</h4>
                <p className="text-[14px] text-gray-600">Your post will be easily informed to your friend by displaying the posts in their feed.</p>
                <div className="grid grid-cols-2 gap-[16px] mt-[24px]">
                    <FriendCardComponent />
                    <FriendCardComponent />
                    <FriendCardComponent />
                    <FriendCardComponent />
                    <FriendCardComponent />
                    <FriendCardComponent />
                    <FriendCardComponent />
                </div>
            </div>
        </MainContainer>
    )
}

export default FriendsPage