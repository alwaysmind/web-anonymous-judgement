import { FormEvent, useRef, useState } from "react"

import CSSTransition from "react-transition-group/CSSTransition"

import MainContainer from "../common/containers/MainContainer"
import DropdownComponent from "../common/tailwindcomponents/DropdownComponent"



const CreatePostPage = () => {

    const [dataPost, setDataPost] = useState({
        title: "👋", // replace with emoticon
        access: "public", // public, private
        description: "", 
        response_type: "" , // all, name, anonym
        begun_at: "",
        ended_at: "",
        questions: [] // title (question), is_text (boolean), is_rating (boolean), is_private (boolean)
    })

    const modalTypesRef = useRef<HTMLDivElement>(null)
    const modalQuestionOptionRef = useRef<HTMLDivElement>(null)
    const modalQuestionTextRef = useRef<HTMLDivElement>(null)

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModalQuestionOptionOpen, setIsModalQuestionOptionOpen] = useState(false)
    const [isModalQuestionTextOpen, setIsModalQuestionTextOpen] = useState(false)

    const timeout = { enter: 300, exit: 100 }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(dataPost)
    }

    const [questionOptions, setQuestionOptions] = useState([
        {
            id: 1,
            content: "What is your favorite color?",
            type: "text",
            isRequired: true,
            options: [],
        },
        {
            id: 2,
            content: "What is your favorite animal?",
            type: "text",
            isRequired: true,
            options: [],
        },
        {
            id: 3,
            content: "What is your favorite food?",
            type: "text",
            isRequired: true,
            options: [],
        },
    ])

    const [option, setOption] = useState("")

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()

        setQuestionOptions([...questionOptions, {
            id: questionOptions.length,
            content: option,
            type: "option",
            isRequired: true,
            options: []
        }])

        setOption("")
    }

    const handleRemove = (id: number) => {
        setQuestionOptions(questionOptions.filter(_ => _.id !== id))
    }


    return (
        <MainContainer className="bg-gray-50 pb-0" isBack>
            <div className="grid grid-cols-1 gap-[16px] mt-[24px]  mb-[90px]">
                <div>
                    <div className="mx-[16px]">
                        <h5 className="text-[18px] font-medium">Create New Post</h5>
                        <p className="text-[14px] text-gray-600">Don't forget to create questions that align with what you describe.</p>
                    </div>
                    <div className="bg-white p-[16px] mt-[24px] rounded-xl shadow-sm">
                        <div className="bg-gray-100 p-[16px] rounded-xl">
                            <div className="bg-white p-[16px] aspect-square w-fit rounded-full flex items-center justify-center text-[18px]">
                                {dataPost.title}
                            </div>
                            <div className="mt-[16px] grid grid-cols-1 gap-[16px]">
                                <div>
                                    <p className="text-[14px]">Give message to the people who might want to give response to this post!</p>
                                    <textarea
                                        className="w-full rounded-xl resize-none p-[16px] mt-[8px]"
                                        placeholder="What's on your mind?"
                                        value={dataPost.description}
                                        onChange={(e) => setDataPost({ ...dataPost, description: e.target.value })} />
                                </div>
                                <div className="grid grid-cols-2 gap-[16px]">
                                    <div className="">
                                        <p className="text-[14px]">Begun at</p>
                                        <input
                                            type="datetime-local"
                                            className="px-[16px] py-[12px] text-[12px] box-border mt-[8px] rounded-xl w-full text-ellipsis"
                                            onChange={(e) => setDataPost({ ...dataPost, begun_at: e.target.value })}
                                            value={dataPost.begun_at} />
                                    </div>
                                    <div className="">
                                        <p className="text-[14px]">Ended at</p>
                                        <input
                                            type="datetime-local"
                                            className="px-[16px] py-[12px] text-[12px] box-border mt-[8px] rounded-xl w-full text-ellipsis"
                                            onChange={(e) => setDataPost({ ...dataPost, ended_at: e.target.value })}
                                            value={dataPost.ended_at} />
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
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[32px] flex items-center justify-between">
                                <div className="flex items-center gap-[4px] text-[14px] text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>
                                        23 questions
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mx-[16px]">
                        <div className="flex items-center justify-between">
                            <h4 className="text-gray-700 font-medium text-[14px]">List of Questions:</h4>
                            <div>
                                <button
                                    onClick={() => setIsModalOpen(!isModalOpen)}
                                    className="font-medium bg-blue-600 px-[16px] py-[12px] text-white text-[14px] rounded-xl">Add Question</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-[16px] mt-[16px]">
                            <div className="py-[16px] px-[16px] bg-white rounded-xl">
                                <div className="rounded-xl">
                                    <div className="flex items-center justify-between">
                                        <div className="aspect-square bg-blue-50 w-fit p-[16px] flex items-center justify-center rounded-full text-[18px] text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                            </svg>
                                        </div>
                                        <div>
                                            <DropdownComponent />
                                        </div>
                                    </div>
                                    <div className="mt-[16px]">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia consequatur explicabo asperiores eos quasi itaque dolor ex error sed nobis minima sint hic rem incidunt, vero sapiente neque, in quibusdam.
                                    </div>
                                </div>
                                <div className="mt-[24px]">
                                    <p className="text-gray-700 text-[14px]">Options:</p>
                                    <div className="mt-[8px] grid grid-cols-1 gap-[12px]">
                                        <div className="bg-gray-100 p-[16px] rounded-xl">
                                            Lorem ipsum dolor sit
                                        </div>
                                        <div className="bg-gray-100 p-[16px] rounded-xl">
                                            Lorem ipsum dolor sit
                                        </div>
                                        <div className="bg-gray-100 p-[16px] rounded-xl">
                                            Lorem ipsum dolor sit
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[12px]">
                                    <span className="text-red-600 text-[12px]">*Private</span>
                                </div>
                            </div>
                            <div className="py-[16px] px-[16px] bg-white rounded-xl">
                                <div className="rounded-xl">
                                    <div className="flex items-center justify-between">
                                        <div className="aspect-square bg-blue-50 w-fit p-[16px] flex items-center justify-center rounded-full text-[18px] text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <DropdownComponent />
                                        </div>
                                    </div>
                                    <div className="mt-[16px]">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia consequatur explicabo asperiores eos quasi itaque dolor ex error sed nobis minima sint hic rem incidunt, vero sapiente neque, in quibusdam.
                                    </div>
                                    <div className="mt-[12px]">
                                        <span className="text-red-600 text-[12px]">*Private</span>
                                    </div>
                                </div>
                            </div>
                            <div className="py-[16px] px-[16px] bg-white rounded-xl">
                                <div className="rounded-xl">
                                    <div className="flex items-center justify-between">
                                        <div className="aspect-square bg-blue-50 w-fit p-[16px] flex items-center justify-center rounded-full text-[18px] text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <DropdownComponent />
                                        </div>
                                    </div>
                                    <div className="mt-[16px]">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia consequatur explicabo asperiores eos quasi itaque dolor ex error sed nobis minima sint hic rem incidunt, vero sapiente neque, in quibusdam.
                                    </div>
                                    <div className="mt-[16px] flex items-center justify-between gap-[8px]">
                                        <span className="text-[14px]">0</span>
                                        <input
                                            className="w-full"
                                            type="range"
                                            min={0}
                                            max={10}
                                            step={1}
                                            disabled />
                                        <span className="text-[14px]">10</span>
                                    </div>
                                    <div className="mt-[8px] text-center text-gray-800">
                                        <p className="text-[14px]">Value: <span className="font-medium">10</span></p>
                                    </div>
                                    <div className="mt-[12px]">
                                        <span className="text-red-600 text-[12px]">*Private</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <CSSTransition
                        nodeRef={modalTypesRef}
                        in={isModalOpen}
                        timeout={timeout}
                        classNames="fadeIn"
                        unmountOnExit
                        onEnter={() => isModalOpen}
                        onExit={() => !isModalOpen}>
                        <div className="fixed top-0 max-w-md w-full h-full z-20 flex justify-center overflow-auto max-h-full bg-blue-700 bg-opacity-90">
                            <div
                                ref={modalTypesRef}
                                className="bg-white py-[24px] px-[16px] z-30 w-full h-fit my-[64px] mx-[16px] rounded-xl shadow">
                                <div className="pb-[16px]">
                                    <h4 className="font-medium text-[22px]">Choose Type</h4>
                                </div>
                                <div>
                                    <p className="text-gray-900">
                                        Please choose one of the following question types:
                                    </p>
                                    <div className="grid grid-cols-2 gap-[12px] mt-[16px]">
                                        <button
                                            className="bg-gray-100 text-[12px] px-[16px] py-[12px] font-medium rounded-xl text-blue-600 flex items-center justify-center flex-wrap"
                                            onClick={() => {
                                                setIsModalOpen(false)
                                                setIsModalQuestionOptionOpen(true)
                                            }}>
                                            <div>
                                                <div className="aspect-square bg-blue-50 w-fit p-[16px] flex items-center justify-center rounded-full text-[18px] text-blue-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <span className="w-full mt-[4px]">
                                                Options
                                            </span>
                                        </button>
                                        <button
                                            className="bg-gray-100 text-[12px] px-[16px] py-[12px] font-medium rounded-xl text-blue-600 flex items-center justify-center flex-wrap"
                                            onClick={() => {
                                                setIsModalOpen(false)
                                                setIsModalQuestionTextOpen(true)
                                            }}>
                                            <div>
                                                <div className="aspect-square bg-blue-50 w-fit p-[16px] flex items-center justify-center rounded-full text-[18px] text-blue-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <span className="w-full mt-[4px]">
                                                Text
                                            </span>
                                        </button>
                                        <button
                                            className="bg-gray-100 text-[12px] px-[16px] py-[12px] font-medium rounded-xl text-blue-600 flex items-center justify-center flex-wrap"
                                            onClick={() => {
                                                setIsModalOpen(false)
                                                setIsModalQuestionTextOpen(true)
                                            }}>
                                            <div>
                                                <div className="aspect-square bg-blue-50 w-fit p-[16px] flex items-center justify-center rounded-full text-[18px] text-blue-400">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <span className="w-full mt-[4px]">
                                                Range
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end gap-[8px] mt-[32px]">
                                    <button
                                        onClick={() => {
                                            setIsModalOpen(false)
                                        }}
                                        className="bg-gray-100 px-[16px] py-[8px] rounded-xl">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>

                    <CSSTransition
                        nodeRef={modalQuestionOptionRef}
                        in={isModalQuestionOptionOpen}
                        timeout={timeout}
                        classNames="fadeIn"
                        unmountOnExit
                        onEnter={() => isModalQuestionOptionOpen}
                        onExit={() => !isModalQuestionOptionOpen}>
                        <div className="fixed top-0 max-w-md w-full h-full z-20 flex justify-center overflow-auto max-h-full bg-blue-700 bg-opacity-90">
                            <div
                                ref={modalQuestionOptionRef}
                                className="bg-white py-[24px] px-[16px] z-30 w-full h-fit mt-[64px] mb-[120px] mx-[16px] rounded-xl shadow">
                                <div className="pb-[16px]">
                                    <h4 className="font-medium text-[22px]">Create Question</h4>
                                </div>
                                <div>
                                    <div>
                                        <p className="text-gray-900">
                                            Type your question here:
                                        </p>
                                        <div className="mt-[8px]">
                                            <textarea className="w-full bg-gray-100 rounded-xl resize-none px-[16px] py-[12px]" placeholder="What's your mind?"></textarea>
                                        </div>
                                    </div>
                                    <div className="mt-[24px]">
                                        <p className="text-gray-900">
                                            Available options:
                                        </p>
                                        <div className="grid grid-cols-1 gap-[16px] mt-[8px]">
                                            {questionOptions.length > 0 ? questionOptions.map(questionOption => (
                                                <div
                                                    key={questionOption.id}
                                                    className="p-[16px] bg-blue-50 rounded-xl border border-gray-100 flex justify-between">
                                                    <span>
                                                        {questionOption.content}
                                                    </span>
                                                    <button className="text-[18px] active:bg-blue-100 p-[8px] aspect-square flex items-center justify-center rounded-md" onClick={() => handleRemove(questionOption.id)}>
                                                        &times;
                                                    </button>
                                                </div>
                                            )) : (
                                                <div className="text-[12px] text-gray-400">Options no available</div>
                                            )}
                                        </div>
                                    </div>
                                    <form method="POST" onSubmit={onSubmit}>
                                        <div className="mt-[24px]">
                                            <p className="text-gray-900">
                                                Type your options here:
                                            </p>
                                            <div className="grid grid-cols-1 gap-[16px] mt-[8px]">
                                                <div>
                                                    <input type="text" className="bg-gray-100 w-full py-[14px] px-[16px] rounded-xl" placeholder="Option ..." value={option} onChange={(e) => setOption(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-[16px]">
                                            <button className="px-[16px] py-[8px] bg-blue-600 w-full text-white rounded-xl">Add option</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="flex items-center justify-between gap-[8px] mt-[32px]">
                                    <div>
                                        <label className="flex items-center gap-[8px]">
                                            <input type="checkbox" />
                                            <span className="text-[14px] text-gray-600">Required</span>
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-[8px]">
                                        <button onClick={() => {
                                            setIsModalOpen(true)
                                            setIsModalQuestionOptionOpen(false)
                                        }} className="bg-gray-100 px-[16px] py-[8px] rounded-xl">Cancel</button>
                                        <button className="bg-blue-600 text-white px-[16px] py-[8px] rounded-xl">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>

                    <CSSTransition
                        nodeRef={modalQuestionTextRef}
                        in={isModalQuestionTextOpen}
                        timeout={timeout}
                        classNames="fadeIn"
                        unmountOnExit
                        onEnter={() => isModalQuestionTextOpen}
                        onExit={() => !isModalQuestionTextOpen}>
                        <div className="fixed top-0 max-w-md w-full h-full z-20 flex justify-center overflow-auto max-h-full bg-blue-700 bg-opacity-90">
                            <div
                                ref={modalQuestionTextRef}
                                className="bg-white py-[24px] px-[16px] z-30 w-full h-fit my-[64px] mx-[16px] rounded-xl shadow">
                                <div className="pb-[16px]">
                                    <h4 className="font-medium text-[22px]">Create Question</h4>
                                </div>
                                <div>
                                    <div>
                                        <p className="text-gray-900">
                                            Type your question here:
                                        </p>
                                        <div className="mt-[8px]">
                                            <textarea className="w-full bg-gray-100 rounded-xl resize-none px-[16px] py-[12px]" placeholder="What's your mind?"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end gap-[8px] mt-[32px]">
                                    <button onClick={() => {
                                        setIsModalOpen(true)
                                        setIsModalQuestionTextOpen(false)
                                    }} className="bg-gray-100 px-[16px] py-[8px] rounded-xl">Cancel</button>
                                    <button className="bg-blue-600 text-white px-[16px] py-[8px] rounded-xl">Save</button>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </div>
            </div>

            <div className="fixed bottom-[90px] shadow-lg bg-white p-[16px] w-full max-w-md gap-[64px] m-0 grid grid-cols-2 items-center">
                <div>
                    <p className="text-[14px] text-gray-700">
                        Need help? <a href="/" className="text-blue-600">Read this</a>
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <button
                        type="submit" 
                        className="px-[16px] py-[12px] bg-blue-600 text-white w-full rounded-xl">
                        Publish
                    </button>
                </form>
            </div>
        </MainContainer>
    )
}

export default CreatePostPage