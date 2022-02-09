import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPostFriend } from "../api/services/PostService"
import PostCardComponent from "../common/components/PostCardComponent"
import MainContainer from "../common/containers/MainContainer"

const HomePage = () => {

    const dispatch = useDispatch()
    const user = useSelector((state: any) => state.UserReducer.user)

    useEffect(() => {
        if (user.user) {
            getAllPostFriend(user.user._id).then((res: any) => {
                dispatch({
                    type: "SET_FRIEND_POSTS",
                    payload: res.data
                })
            })
        }

    }, []) // eslint-disable-line

    const posts: any = []

    return (
        <MainContainer className="bg-gray-50 h-full">
            <div className="mx-[16px] mt-[24px]">
                <h5 className="text-[18px] font-medium">Latest Update</h5>
                <p className="text-[14px] text-gray-600">Help your friends with giving your best response to their latest post.</p>
            </div>

            {posts.length > 0 ? (
                <div className="grid grid-cols-1 gap-[16px] mt-[24px]">
                    {posts.map((post: any) => (
                        <PostCardComponent
                            key={post.id}
                            post={post}
                            user={post.user} />
                    ))}
                </div>
            ) : (
                <div className="mt-[32px]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto text-gray-300 h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-center mt-[12px] text-[14px] text-gray-400 w-[50%] mx-auto">Everything is catched up!</p>
                </div>
            )}


        </MainContainer>
    )
}

export default HomePage