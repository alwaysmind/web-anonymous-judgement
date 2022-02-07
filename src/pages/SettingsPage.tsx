import MainContainer from "../common/containers/MainContainer"

const SettingsPage = () => {
    return (
        <MainContainer>
            <div className="mt-[24px] mx-[16px]">
                <div>
                    <h5 className="text-[18px] font-medium">Pinned Post</h5>
                    <p className="text-[14px] text-gray-600">Below are your pinned post, anyone who views your profile can response to this post.</p>
                </div>
            </div>
        </MainContainer>
    )
}

export default SettingsPage