import React, { useState } from 'react'
import Header from '../../component/header/Header'
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from 'react-icons/ai'

export default function EditContentInfoPage() {

    // imgList api로 가져와야함.
    const imglist = [1, 2, 3, 4, 5]
    const [imgNum, setImgNum] = useState(0)

    // onClick()
    const handleDeletePic = () => {
        imglist.splice(imgNum, 1)
    }



    return (
        <div>
            <Header />
            {/* 각 태그마다 줄바꿈 + */}
            <div className='max-w-7xl min-w-0 w-[80vw] m-auto '>
                <h2 className='font-bold text-2xl py-3 border-b-[2px]'>컨텐츠 소개</h2>
                <div className='flex py-10 justify-center'>
                    <div className='mr-10 w-[30vw]'>
                        <div className='flex border items-center relative justify-between flex-auto' style={{ width: "30vw", height: "30vw" }} >
                            <button className='absolute right-px top-px'><AiOutlineClose /></button>
                            <AiOutlineLeft onClick={() => { setImgNum((imgNum - 1) % 4) }} />
                            <img></img>
                            <AiOutlineRight onClick={() => { setImgNum((imgNum + 1) % 4) }} />
                        </div>
                        <div className='flex mt-3'>
                            {imglist.map((img, idx) => (
                                <div className='border w-[6vw] h-[6vw]' onClick={() => { setImgNum(idx) }} style={{ width: "6vw", height: "6vw" }}> {img} </div>
                            ))}
                        </div>
                    </div>
                    <div className='ml-5 w-[50vw]'>
                        <h1 className='font-bold text-3xl'>Title</h1>
                        <h2 className='text-xl mt-2'>부제</h2>
                        <p className='w-full border-t-2'>프로젝트 상세 설명</p>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-2xl py-3 border-b-[2px]'>팀 소개</h2>
                    <div className=''>
                        
                    </div>
                </div>
                <h2 className='font-bold text-2xl py-3 border-b-[2px]'>컨텐츠 소개</h2>
                <div className='flex py-10 justify-center'>
                    <div className='mr-10 w-[30vw]'>
                        <div className='flex border items-center relative justify-between flex-auto' style={{ width: "30vw", height: "30vw" }} >
                            <button className='absolute right-px top-px'><AiOutlineClose /></button>
                            <AiOutlineLeft onClick={() => { setImgNum((imgNum - 1) % 4) }} />
                            <img></img>
                            <AiOutlineRight onClick={() => { setImgNum((imgNum + 1) % 4) }} />
                        </div>
                        <div className='flex mt-3'>
                            {imglist.map((img, idx) => (
                                <div className='border w-[6vw] h-[6vw]' onClick={() => { setImgNum(idx) }} style={{ width: "6vw", height: "6vw" }}> {img} </div>
                            ))}
                        </div>
                    </div>
                    <div className='ml-5 w-[50vw]'>
                        <h1 className='font-bold text-3xl'>Title</h1>
                        <h2 className='text-xl mt-2'>부제</h2>
                        <p className='w-full border-t-2'>프로젝트 상세 설명</p>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-2xl py-3 border-b-[2px]'>팀 소개</h2>
                    <div className=''>
                        
                    </div>
                </div>

                {/* <form className='block team-edit-form p-7 shadow-md' action='/' method='get' onSubmit={handleSaveTeamData}>
                    <h3 className='font-semibold text-lg py-3'>1. 팀 소개</h3>
                    <hr></hr>
                    <label for="team_name" >팀명</label>
                    <input type="text" onChange={handleChange} id='team_name' name='team_name' />
                    <label for="short_description">프로젝트 한 줄 설명</label>
                    <input type="text" id='short_description' onChange={handleChange} name='short_description' placeholder='ex) ' />
                    <label for="category">컨텐츠 분야</label>
                    <select id="category" onChange={handleChange}>
                        <option>웹드라마</option>
                        <option>단편 영화</option>
                        <option>코믹</option>
                        <option>교육</option>
                    </select>
                    <label for="teammates" >현재 팀원</label>
                    <input type="number" onChange={handleChange} id='teammates' name='teammates' min={1} className='w-10' />

                    <label for="due_date">모집 마감일</label>
                    <input type="date" id='due_date' onChange={handleChange} name='due_date' />

                    <label for="active_period">예상 제작 기간</label>
                    <input type="number" id='active_period' name='active_period' onChange={handleChange} className=' w-10' min={1} />개월

                    <label for="opening_position">컨텐츠 상세 소개</label>

                    <CKEditor
                        ref={editorRef}
                        editor={ClassicEditor}
                        data=""
                    /> */}

                {/* <input type="hidden" name='detailDescription' value={} /> */}
                {/* <button type='submit' className='p-3 rounded-lg text-white bg-gray-900 mt-3 float-right' >저장하기</button>
                </form> */}
            </div>
        </div>
    )
}
