import { useNavigate } from "react-router-dom"
import MainContainer from "../common/containers/MainContainer"

const CreatePostPage = () => {

    const navigate = useNavigate()

    return (
        <MainContainer className="bg-gray-50 pb-0">
            <div className="grid grid-cols-1 gap-[16px]">
                <div className="bg-white p-[16px] rounded-xl shadow-sm mb-[90px]">
                    <div className="bg-gray-100 p-[16px] rounded-xl">
                        <div className="bg-white p-[16px] aspect-square w-fit rounded-full flex items-center justify-center text-[18px]">
                            👋
                        </div>
                        <div className="mt-[16px] grid grid-cols-1 gap-[16px]">
                            <div>
                                <p className="text-[14px]">Give message to the people who might want to give response to this post!</p>
                                <textarea className="w-full rounded-xl resize-none p-[16px] mt-[8px]" placeholder="What's your mind?"></textarea>
                            </div>
                            <div>
                                <p className="text-[14px]">Questions</p>
                                <button
                                    onClick={() => navigate('/question-list')}
                                    className="mt-[8px] bg-gray-200 py-[12px] rounded-xl px-[16px] w-full">
                                    Go to the questions list
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-[16px]">
                                <div className="">
                                    <p className="text-[14px]">Begin Date</p>
                                    <input
                                        type="datetime-local"
                                        className="px-[16px] py-[12px] text-[12px] box-border mt-[8px] rounded-xl" />
                                </div>
                                <div className="">
                                    <p className="text-[14px]">End Date</p>
                                    <input
                                        type="datetime-local"
                                        className="px-[16px] py-[12px] text-[12px] box-border mt-[8px] rounded-xl" />
                                </div>
                            </div>
                            <div>
                                <p className="text-[14px]">Post Settings</p>
                                <div className="mt-[8px] grid grid-cols-1 gap-[8px]">
                                    <div>
                                        <label className="flex gap-[8px] items-center">
                                            <input type="checkbox" name="" id="" className="scale-110" />
                                            <span>Make everyone who response anonymous</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="flex gap-[8px] items-center">
                                            <input type="checkbox" name="" id="" className="scale-110" />
                                            <span>Permit judges to be anonymous</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="flex gap-[8px] items-center">
                                            <input type="checkbox" name="" id="" className="scale-110" />
                                            <span>Make this post private</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="flex gap-[8px] items-center">
                                            <input type="checkbox" name="" id="" className="scale-110" />
                                            <span>Only person who has referal link can response</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[32px] flex items-center justify-between">
                            <div className="flex items-center gap-[4px] text-[14px] text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>
                                    23 questions
                                </span>
                            </div>
                            <div>
                                {/* <button className="px-[16px] py-[8px] bg-blue-600 text-white rounded-xl">List of Questions</button> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fixed bottom-[90px] shadow-lg bg-white p-[16px] w-full max-w-md gap-[64px] m-0 grid grid-cols-2 items-center">
                    <div>
                        <p className="text-[14px] text-gray-700">
                            Need help? <a href="/" className="text-blue-600">Read this</a>
                        </p>
                    </div>
                    <button className="px-[16px] py-[12px] bg-blue-600 text-white w-full rounded-xl">
                        Publish
                    </button>
                </div>


            </div>
        </MainContainer>
    )
}

export default CreatePostPage