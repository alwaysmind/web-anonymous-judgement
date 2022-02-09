import { useNavigate } from "react-router-dom"
import FloatingButtonComponent from "../common/components/FloatingButtonComponent"
import PostCardComponent from "../common/components/PostCardComponent"
import MainContainer from "../common/containers/MainContainer"

import Chart from 'react-apexcharts'
import ProfileCardComponent from "../common/components/ProfileCardComponent"
import { useSelector } from "react-redux"

const FloatingButton = () => {
    const navigate = useNavigate()

    return (
        <FloatingButtonComponent
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>}
            onClick={() => navigate('/create-post')} />
    )
}

const MyAccountPage = () => {

    const graphData = {
        count_posts: 0,
        count_responses: 0
    }

    const stats = {
        options: {
            theme: {
                palette: "palette2"
            },
            labels: ['Posts', 'Responses'],
            dataLabels: {
                formatter: function (val: any, opts: any) {
                    return parseInt(val)
                },
                dropShadow: {
                    enabled: false,
                }
            },
            plotOptions: {
                pie: {
                    expandOnClick: false,
                }
            }
        },
        series: [graphData.count_posts, graphData.count_responses],
    }

    const user = useSelector((state: any) => state.UserReducer.user)

    const posts: any = []

    return (
        <MainContainer floatingButton={<FloatingButton />}>
            <ProfileCardComponent />

            <div className="mt-[8px] p-[16px] rounded-xl bg-transparent">
                <h4 className="font-medium text-[18px]">Your Account's Graph</h4>
                <p className="text-[14px] text-gray-600">This graph shows how much your posts and responses you've submited.</p>
                {graphData.count_posts > 0 || graphData.count_responses > 0 ? (
                    <div className="grid grid-cols-3 grid-rows-2 gap-[16px] mt-[16px]">
                        <div className="col-span-3 bg-gray-50 row-span-2 rounded-xl flex items-center justify-center relative">
                            <Chart options={stats.options} series={stats.series} type={"donut"} width={"400px"} />
                        </div>
                    </div>
                ) : (
                    <div className="mt-[32px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto text-gray-300 h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-center mt-[12px] text-[14px] text-gray-400 w-[50%] mx-auto">You have no activity yet, lets create a new post or give response now!</p>
                    </div>
                )}
            </div>

            {graphData.count_posts < 1 && graphData.count_responses < 1 ? null : (
                <div className="mt-[24px]">
                    <div className="mx-[16px]">
                        <h4 className="font-medium text-[18px]">Your Posts</h4>
                        <p className="text-[14px] text-gray-600">Click plus (+) button to add new post.</p>
                    </div>
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-[16px] mt-[24px]">
                            {posts.map((post: any) => (
                                <PostCardComponent
                                    key={post.id}
                                    post={post}
                                    user={user}
                                    isBelonged={true} />
                            ))}
                        </div>
                    ) : (
                        <div className="mt-[32px]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto text-gray-300 h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-center mt-[12px] text-[14px] text-gray-400 w-[50%] mx-auto">You have no post yet, lets create a new post now!</p>
                        </div>
                    )}
                </div>
            )}
        </MainContainer>
    )
}

export default MyAccountPage