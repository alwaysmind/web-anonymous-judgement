import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ProfileCardComponent = () => {

    const user = useSelector((state: any) => state.UserReducer.user)

    return (
        <div className="py-[32px] flex flex-wrap mx-[16px]">
            <div className="flex items-center justify-center w-full">
                <img
                    src={user.user?.avatar || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"}
                    className="aspect-square overflow-hidden w-[80px] rounded-full bg-gray-100" 
                    alt="" />
            </div>
            <div className="text-center w-full mt-[12px]">
                <h4 className="">{ user.user?.name || "You" }</h4>
                <h6 className="text-[14px] text-gray-600">{ user.user?.email || "@anonymous" }</h6>
            </div>
            <div className="w-full text-gray-500 mt-[16px] text-[14px] text-center">
                Hallo, i’m a good designer and really need to be more complex in a thing like that.
            </div>
            <div className="flex items-center justify-around w-full mt-[28px] font-medium text-gray-600 text-[14px]">
                <Link to="/friends">{ user.user?.followers?.length || '0' } Friends</Link>
                <span>0 Posts</span>
                <span>0 Responses</span>
            </div>
        </div>
    )
}

export default ProfileCardComponent