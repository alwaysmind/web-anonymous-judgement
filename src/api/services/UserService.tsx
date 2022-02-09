import { Get, Post } from "../methods"

export const showUserByFilter = async (filter?: string) => {
    return await Get('/users?name=' + filter);
}

export const showUserFriends = async (userId: string) => {
    return await Get('/users/' + userId);
}

export const followUser = async (payload: any) => {
    return await Post('/users/follow', payload)
}