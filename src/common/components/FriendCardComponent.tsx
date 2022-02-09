import { followUser } from "../../api/services/UserService"

type FriendCardComponentProps = {
    className?: string,
    user?: {
        _id: any,
        avatar: string,
        name: string,
        followers: string,
        posts: string,
        responses: string,
    }
}

const FriendCardComponent = ({ className, user }: FriendCardComponentProps) => {

    const handleFollow = (userId: any) => {
        followUser({ userId }).then((res: any) => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className={`bg-white rounded-lg px-[16px] py-[12px] shadow-sm ${className}`}>
            <div className="flex items-center justify-center">
                <img src={user?.avatar || "https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"} alt="" width={"50%"} className={"aspect-square rounded-full bg-gray-100"} />
            </div>
            <div className="text-center mt-[8px]">
                <p className="font-medium overflow-hidden text-ellipsis">{user?.name}</p>
            </div>
            <div className="grid grid-cols-3 gap-[8px] mt-[12px] text-center text-[12px] text-gray-600 leading-4">
                <div className="overflow-hidden text-ellipsis">0 <br /> Friends</div>
                <div className="overflow-hidden text-ellipsis">0 <br /> Posts</div>
                <div className="overflow-hidden text-ellipsis">0 <br /> Responses</div>
            </div>
            <div className="mt-[12px]">
                <button
                    onClick={() => handleFollow(user?._id)}
                    className="bg-blue-600 py-[8px] w-full px-[12px] text-[12px] text-white rounded-xl">
                    Add Friend
                </button>
            </div>
        </div>
    )
}

export default FriendCardComponent