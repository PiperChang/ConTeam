import React, { useState,useRef} from 'react'
import Header from '../../component/header/Header'
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from 'react-icons/ai'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ProfileCard from '../RecruitPage/ProfileCard';
export default function EditContentInfoPage() {
    // imgList api로 가져와야함.
    const imglist = [1, 2, 3, 4, 5]
    const [imgNum, setImgNum] = useState(0)
    const editorRef = useRef();
    
    const handleDeletePic = () => {
        imglist.splice(imgNum, 1)
    }

    const [contentData, setContentData] = useState({
        title:'',
        subtitle:"",
        desc:"",
        imgs:[]
    })
    
    const handleChange = (e) => {
        const newContentData = contentData
        newContentData[e.target.name] = e.target.value
        setContentData(contentData)
    }
    
    const saveContentData =(e) =>{
        // axios.~ 보내기
    }
    return (
        <div>
            <Header />
            <div className='max-w-7xl min-w-0 w-[80vw] m-auto '>
                <form onSubmit={saveContentData}>
                <h2 className='font-bold text-2xl py-3 border-b-[2px] mb-5'>컨텐츠 소개</h2>
                <div className='flex justify-center'>
                    {/* Images */}
                    <div className='mr-10'>
                        <div className='flex border items-center relative justify-between flex-auto' style={{ width: "30rem", height: "30rem" }} >
                            <button className='absolute right-px top-px'><AiOutlineClose /></button>
                            <AiOutlineLeft onClick={() => { setImgNum((imgNum - 1) % 4) }} />
                            <img></img>
                            <AiOutlineRight onClick={() => { setImgNum((imgNum + 1) % 4) }} />
                        </div>
                        <div className='flex mt-3'>
                            {imglist.map((img, idx) => (
                                <div className='border w-[6rem] h-[6rem]' onClick={() => { setImgNum(idx) }}> {img} </div>
                            ))}
                        </div>
                    </div>
                    {/* INPUT */}
                    <div className='ml-5 w-[50vw]'>
                        <input name= 'title' className='font-bold text-3xl px-2' placeholder='Title' onChange={handleChange}></input>
                        <br></br>
                        <input name= 'subtitle' className='text-xl my-2 px-2 ' placeholder='부제' onChange={handleChange}></input>
                        <textarea name='desc' 
                        className='w-full mt-10 h-4/5 p-2' placeholder='컨텐츠에 대한 상세한 소개내용을 적어주세요.' onChange={handleChange}/>
                    </div>
                </div>

                <div className='flex border-t-2 my-3 py-2'>
                    <button type="submit" className='ml-auto shadow rounded-full p-5 text-orange-500 hover:bg-orange-300 font-bold hover:text-black '>저장</button>                        
                    <button className='ml-5 shadow rounded-full p-5 text-orange-500 hover:bg-orange-300 font-bold hover:text-black'>다음</button>                        
                </div>
            </form>

            <h2 className='font-bold text-2xl py-3 border-b-[2px] mb-5'>컨텐츠 소개</h2>
                <div className='flex justify-center'>
                    {/* Images */}
                    <div className='mr-10'>
                        <div className='flex border items-center relative justify-between flex-auto' style={{ width: "30rem", height: "30rem" }} >
                            <button className='absolute right-px top-px'><AiOutlineClose /></button>
                            <AiOutlineLeft onClick={() => { setImgNum((imgNum - 1) % 4) }} />
                            <img></img>
                            <AiOutlineRight onClick={() => { setImgNum((imgNum + 1) % 4) }} />
                        </div>
                        <div className='flex mt-3'>
                            {imglist.map((img, idx) => (
                                <div className='border w-[6rem] h-[6rem]' onClick={() => { setImgNum(idx) }}> {img} </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* INPUT */}
                    <div className='ml-5 w-[50vw]'>
                        <h3 className='font-bold text-3xl px-2'>{contentData['title']}</h3>
                        <br></br>
                        <h2 className='text-xl my-2 px-2 '>{contentData['subtitle']}</h2>
                        <p className='w-full mt-10 h-4/5 p-2'>{contentData['desc']}</p>
                    </div>
                </div>

                <div className='flex border-t-2 my-3 py-2'>
                    <button type="submit" className='ml-auto shadow rounded-full p-5 text-orange-500 hover:bg-orange-300 font-bold hover:text-black '>저장</button>                        
                    <button className='ml-5 shadow rounded-full p-5 text-orange-500 hover:bg-orange-300 font-bold hover:text-black'>다음</button>                        
                </div>
                
                <div>
                    <h2 className='font-bold text-2xl py-3 border-b-[2px]'>팀 소개</h2>
                    <div className=''>
                        <ProfileCard />
                    </div>
                </div>

                {/* <form className='block team-edit-form p-7 shadow-md' action='/' method='get' onSubmit={handleSaveTeamData}>
                    <h3 className='font-semibold text-lg py-3'>1. 팀 소개</h3>
                    <hr></hr>
                    <label for="team_name" >팀명</label>
                    <input type="text" onChange={handleChange} id='team_name' name='team_name' />
                    <label for="short_description">프로젝트 한 줄 설명</label>
                    <input type="text" id='short_descripti6on' onChange={handleChange} name='short_description' placeholder='ex) ' />
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
