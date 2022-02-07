type User = {
    id: number,
    name: string,
    email: string,
    avatar: string,
}

type Post = {
    id: number,
    content: string,
    count_responses: number,
    posted_at: string,
    isPrivate: boolean,
    user: User,
}

type PostCardComponentProps = {
    user: User,
    post: Post,
    buttonText?: string,
    onClick?: () => void,
    isBelonged?: boolean,
}

const PostCardComponent = ({ user, post, buttonText, onClick, isBelonged }: PostCardComponentProps) => {
    return (
        <div className="bg-white px-[16px] py-[16px] rounded-xl shadow-sm">
            <div className="flex gap-[8px] items-center">
                <div>
                    <img src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" className="aspect-square overflow-hidden w-[45px] rounded-full" alt="" />
                </div>
                <div className="grid grid-rows-2">
                    <h5 className="font-medium text-[14px]">{user.name}</h5>
                    <div className="flex items-center gap-[6px] text-[12px] text-gray-400">
                        <span>{post.posted_at}</span>
                        <span>|</span>
                        <span>{post.isPrivate ? 'Private' : 'Public'}</span>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 rounded-xl px-[16px] py-[16px] mt-[16px]">
                <div className="aspect-square bg-white w-fit p-[16px] flex items-center justify-center rounded-full text-[18px]">
                    👋
                </div>
                <div className="mt-[16px]">
                    {post.content}
                </div>
            </div>
            <div className="flex justify-between items-center mt-[16px]">
                <div className="flex items-center gap-[4px] text-[14px] text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>{post.count_responses} Responses</span>
                </div>
                <div>
                    <button
                        className="bg-blue-600 text-white py-[8px] px-[16px] rounded-xl font-medium text-[14px]">
                        {isBelonged ? 'See Responses' : 'Give Response'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostCardComponent