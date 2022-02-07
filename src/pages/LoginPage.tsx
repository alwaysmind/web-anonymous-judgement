import { Link } from "react-router-dom"
import InputComponent from "../common/components/InputComponent"
import AuthContainer from "../common/containers/AuthContainer"

const LoginPage = () => {
    return (
        <AuthContainer>
            <div className="px-[24px] py-5">
                <div>
                    <img src="./images/bg-login.png" alt="" />
                </div>
                <h4 className="text-[32px] mb-[16px] font-bold ">Login</h4>
                <form className="mt-[24px]">
                    <div className="grid grid-cols-1 gap-[16px]">
                        <InputComponent
                            placeholder={"Email"}
                            type={"email"}
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] w-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                            </svg>}
                            onChange={() => { }}
                            value={""}
                            error={""} />
                        <InputComponent
                            placeholder={"Password"}
                            type={"password"}
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] w-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>}
                            onChange={() => { }}
                            value={""}
                            error={""} />
                    </div>
                    <div className="mt-[32px]">
                        <button className="bg-blue-600 text-white w-full block py-[16px] rounded-2xl font-medium">Login</button>
                    </div>
                    <div className="mt-[47px] text-center">
                        <p className="text-[14px] text-gray-400">Or login with</p>

                        <div className="mt-[16px]">
                            <button className="py-[8px] px-[16px] border-2 border-gray-200 rounded-[16px]">
                                <img src="./images/logo-google.png" className="h-[26px] w-[27px]" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="text-center mt-[32px]">
                        <p className="text-[14px] text-gray-400">New to <span className="font-medium">Anojudge</span>? <Link to="/register" className="text-blue-600 font-medium">Register</Link></p>
                    </div>
                </form>
            </div>
        </AuthContainer>
    )
}

export default LoginPage