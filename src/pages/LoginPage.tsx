import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom'

import AuthContainer from "../common/containers/AuthContainer"
import { loginAnonymous, loginWithGoogle } from '../api/services/AuthService'
import { useDispatch } from 'react-redux'

const LoginPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLoginWithGoogle = async (googleData: any) => {
        loginWithGoogle({ token: googleData.tokenId }).then((res: any) => {
            dispatch({
                type: "SET_USER",
                payload: {
                    ...res.data,
                    isAnonymous: false
                }
            })
            navigate('/')
        }).catch(err => {
            console.log(err)
        })
    }

    const handleLoginAnonimous = async () => {
        loginAnonymous({ id: "" }).then((res: any) => {
            dispatch({
                type: "SET_USER",
                payload: {
                    ...res.data,
                    isAnonymous: true
                }
            })
            navigate('/')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <AuthContainer>
            <div className="px-[24px] py-5">
                <div className="flex items-center justify-center">
                    <img src="./images/bg-login.png" alt="" />
                </div>
                <h4 className="text-[32px] font-bold ">Login</h4>
                <p className="text-[14px] text-gray-600 mt-[12px]">After you logged in, you agree about the terms of service and privacy policy that applied to this app.</p>
                <form className="mt-[24px]">
                    <div className="grid grid-cols-1 gap-[16px]">
                        <GoogleLogin
                            clientId={`${process.env.REACT_APP_CLIENT_ID}`}
                            buttonText="Login with Google"
                            onSuccess={handleLoginWithGoogle}
                            onFailure={() => console.log('error')}
                            render={renderProps => (
                                <button className="py-[12px] px-[16px] border-2 border-gray-200 rounded-[16px] flex items-center justify-center gap-[16px]" onClick={renderProps.onClick} type="button">
                                    <img src="./images/logo-google.png" className="h-[26px] w-[27px]" alt="" />
                                    Login with Google
                                </button>
                            )}
                        />
                        <button
                            className="bg-blue-50 border border-blue-100 text-blue-600 w-full block py-[14px] rounded-2xl"
                            type='button'
                            onClick={handleLoginAnonimous}>Login anonimously</button>
                    </div>
                </form>
            </div>
        </AuthContainer>
    )
}

export default LoginPage