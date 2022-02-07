const FriendCardComponent = () => {
    return (
        <div className="bg-white rounded-lg px-[16px] py-[12px]">
            <div className="flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" width={"50%"} className={"aspect-square rounded-full"} />
            </div>
            <div className="text-center mt-[8px]">
                <p className="font-medium overflow-hidden text-ellipsis">Yohira Nakamoto</p>
            </div>
            <div className="grid grid-cols-3 gap-[8px] mt-[12px] text-center text-[12px] text-gray-600 leading-4">
                <div className="overflow-hidden text-ellipsis">12 <br /> Friends</div>
                <div className="overflow-hidden text-ellipsis">6 <br /> Posts</div>
                <div className="overflow-hidden text-ellipsis">22 <br /> Responses</div>
            </div>
            <div className="mt-[12px]">
                <button className="bg-blue-600 py-[8px] w-full px-[12px] text-[12px] text-white rounded-xl">Remove</button>
            </div>
        </div>
    )
}

export default FriendCardComponent