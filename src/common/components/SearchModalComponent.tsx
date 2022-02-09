import { FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showUserByFilter } from "../../api/services/UserService"
import FriendCardComponent from "./FriendCardComponent"

const SearchModalComponent = () => {

    const dispatch = useDispatch()
    const handleSearchToggle = () => {
        dispatch({
            type: 'TOGGLE_SEARCH'
        })
    }

    const [isLoading, setIsLoading] = useState(false)
    const [isSubmited, setIsSubmited] = useState(false)
    const [searchKeyword, setSearchKeyword] = useState('')
    const searchFriendResult = useSelector((state: any) => state.GlobalReducer.searchFriendResult)

    const handleSearch = (e: FormEvent) => {
        e.preventDefault()

        setIsLoading(true)
        showUserByFilter(searchKeyword).then((res: any) => {
            dispatch({
                type: 'SET_SEARCH_FRIEND_RESULT',
                payload: res.data
            })

            setIsSubmited(true)
            setIsLoading(false)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <div className="px-[24px] py-[32px] relative">
                <div className="absolute right-[16px] top-[16px]">
                    <button onClick={handleSearchToggle} className="p-[8px] active:bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div>
                    <div className="mt-[32px]">
                        <h5 className="text-[18px] font-medium">Search Friends</h5>
                        <p className="text-[14px] text-gray-600">Find your friend by typing the keyword below.</p>
                    </div>
                    <form onSubmit={handleSearch} className="mt-[12px]">
                        <input
                            type="search"
                            className="border border-gray-100 px-[16px] py-[12px] text-[16px] bg-gray-50 rounded-xl w-full"
                            placeholder="Search ..."
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)} />
                    </form>
                    {isLoading ? (
                        <div className="mt-[24px]">
                            <div className="w-[80px] bg-gray-100 animate-pulse h-[18px] rounded-xl" />
                            <div className="grid grid-cols-2 gap-[12px] mt-[8px]">
                                <div className="w-full bg-gray-100 animate-pulse h-[210px] rounded-xl" />
                                <div className="w-full bg-gray-100 animate-pulse h-[210px] rounded-xl" />
                                <div className="w-full bg-gray-100 animate-pulse h-[210px] rounded-xl" />
                            </div>
                        </div>
                    ) : searchFriendResult.length > 0 && isSubmited ? (
                        <div className="mt-[24px]">
                            <div>
                                <h6 className="font-medium text-[14px]">Search Result</h6>
                            </div>
                            <div className="mt-[8px] grid grid-cols-2 gap-[12px]">
                                {searchFriendResult.map((user: any) => (
                                    <FriendCardComponent
                                        key={user._id}
                                        user={user}
                                        className="border border-gray-100" />
                                ))}
                            </div>
                        </div>
                    ) : !isSubmited ? (
                        (
                            <div className="mt-[32px]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto text-gray-300 h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <p className="text-center mt-[12px] text-[14px] text-gray-400 w-[50%] mx-auto">Try to find your friend by using thier username or email as the keyword.</p>
                            </div>
                        )
                    ) : (
                        <div className="mt-[32px]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto text-gray-300 h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                            </svg>
                            <p className="text-center mt-[12px] text-[14px] text-gray-400 w-[50%] mx-auto">Friend not found. Try again and use the right keyword to find them.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchModalComponent