import PostCardComponent from "../common/components/PostCardComponent"
import MainContainer from "../common/containers/MainContainer"

const HomePage = () => {

    const posts = [
        {
            id: 1,
            content: "Hi, I am a beginner here, looking for friends who would like to judge me all the way till I understand myself. Someone willing to help me? 🙂",
            count_responses: 0,
            posted_at: "2020-01-01T00:00:00.000Z",
            isPrivate: false,
            user: {
                id: 1,
                name: "John Doe",
                email: "john@due.com",
                avatar: "https://via.placeholder.com/150"
            }
        },
    ]

    return (
        <MainContainer className="bg-gray-50 h-full">
            <div className="mx-[16px] mt-[24px]">
                <h5 className="text-[18px] font-medium">Latest Update</h5>
                <p className="text-[14px] text-gray-600">Help your friends with giving your best response to their latest post.</p>
            </div>

            <div className="grid grid-cols-1 gap-[16px] mt-[24px]">
                {posts.map(post => (
                    <PostCardComponent
                        key={post.id}
                        post={post}
                        user={post.user} />
                ))}
            </div>

        </MainContainer>
    )
}

export default HomePage