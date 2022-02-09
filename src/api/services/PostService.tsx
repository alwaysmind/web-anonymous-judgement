import { Get } from "../methods"

export const getAllPostFriend = async (userId: string) => {
    return await Get(`/users/${userId}/posts/friends`)
}