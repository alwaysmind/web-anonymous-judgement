const ProfileCardComponent = () => {
    return (
        <div className="py-[32px] flex flex-wrap mx-[16px]">
            <div className="flex items-center justify-center w-full">
                <img src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" className="aspect-square overflow-hidden w-[80px] rounded-full" alt="" />
            </div>
            <div className="text-center w-full mt-[12px]">
                <h4 className="">Adinda Samitri Dewi</h4>
                <h6 className="text-[14px] text-gray-600">@adindadwi</h6>
            </div>
            <div className="w-full text-gray-500 mt-[16px] text-[14px] text-center">
                Hallo, i’m a good designer and really need to be more complex in a thing like that.
            </div>
            <div className="flex items-center justify-around w-full mt-[28px] font-medium text-gray-600 text-[14px]">
                <a href="/">12 Friends</a>
                <a href="/">8 Posts</a>
                <a href="/">12 Responses</a>
            </div>
        </div>
    )
}

export default ProfileCardComponent