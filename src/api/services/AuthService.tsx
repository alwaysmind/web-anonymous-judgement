import { Post } from "../methods"

export const loginWithGoogle = async (payload: any) => {
    return await Post('/auth/login-google', payload)
}

export const loginAnonymous = async (payload: any) => {
    return await Post('/auth/login-anonym', payload)
}

export const logout = async (payload: { id: string }) => {
    return await Post('/auth/logout', payload)
}