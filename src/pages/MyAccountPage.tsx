import { useNavigate } from "react-router-dom"
import FloatingButtonComponent from "../common/components/FloatingButtonComponent"
import PostCardComponent from "../common/components/PostCardComponent"
import MainContainer from "../common/containers/MainContainer"

import Chart from 'react-apexcharts'
import ProfileCardComponent from "../common/components/ProfileCardComponent"

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
            }
        },
        series: [44, 55],
    }

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
        {
            id: 2,
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
        {
            id: 3,
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
        {
            id: 4,
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
        {
            id: 5,
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
        <MainContainer floatingButton={<FloatingButton />}>
            <ProfileCardComponent />

            <div className="mt-[8px] p-[16px] rounded-xl bg-transparent">
                <h4 className="font-medium text-[18px]">Your Account's Graph</h4>
                <p className="text-[14px] text-gray-600">This graph shows how much your posts and responses you've submited.</p>
                <div className="grid grid-cols-3 grid-rows-2 gap-[16px] mt-[16px]">
                    <div className="col-span-3 bg-gray-50 row-span-2 rounded-xl flex items-center justify-center relative">
                        <Chart options={stats.options} series={stats.series} type={"donut"} width={"400px"} />
                    </div>
                </div>
            </div>

            <div className="mt-[24px]">
                <div className="mx-[16px]">
                    <h4 className="font-medium text-[18px]">Your Posts</h4>
                    <p className="text-[14px] text-gray-600">Click plus (+) button to add new post.</p>
                </div>
                <div className="grid grid-cols-1 gap-[16px] mt-[24px]">
                    {posts.map(post => (
                        <PostCardComponent
                            key={post.id}
                            post={post}
                            user={post.user}
                            isBelonged={true} />
                    ))}
                </div>
            </div>
        </MainContainer>
    )
}

export default MyAccountPage