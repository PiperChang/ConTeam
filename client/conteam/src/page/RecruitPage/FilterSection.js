import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'

export default function FilterSection() {

    const [showSearch, setShowSearch] = useState(false)

    const handleSearchRecruits = () => {

    }
    return (
        <div className='flex items-center relative mt-5'>
            <div className='p-1'><AiOutlineMenu /></div>
            <select className='p-1 border-r-2'>
                <option value="none"> 직업 </option>
                <option> 기획자 </option>
                <option> 연출자 </option>
                <option> 출연자 </option>
                <option> 편집자 </option>
            </select>
            <select className='p-1 border-r-2'>
                <option value="none"> 경력 </option>
                <option> 신입 </option>
                <option> ~ 2년 </option>
                <option> ~ 4년 </option>
                <option> ~ 8년 </option>
            </select>
            {/* 몇 년 경력인지가 중요한 요소인가? */}
            <select className='p-1 border-r-2'>
                <option value="none"> 지역 </option>
                <option> 서울 </option>
                <option> 경기·인천 </option>
                <option> 대구·경북 </option>
                <option> 부산·경남 </option>
                <option> 전라도 </option>
                <option> 강원도 </option>
            </select>

            <div className='absolute flex right-0 items-center'>
                {showSearch ?
                    <input placeholder='검색' className='mx-1' onSubmit={handleSearchRecruits} /> : <></>
                }
                <AiOutlineSearch className='mx-1' onClick={() => { setShowSearch(!showSearch); }} />
            </div>
        </div>
    )
}