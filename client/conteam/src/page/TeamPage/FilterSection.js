import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import axios from "axios"

export default function FilterSection({profiles,setProfiles}) {
    const [showSearch, setShowSearch] = useState(false)
    // 리스트에서, e.target.value의
    const handleSearchRecruits = async (e) => {
        e.preventDefault()
        const searchKeyword = e.target.value.toLowerCase()
        // const searchedProfiles = await axios.get('www.naver.whatever')
        // setProfiles(searchedProfiles)
    }


    return (
        <div className='flex items-center relative mt-5'>
            <div className='p-1'><AiOutlineMenu /></div>
            <select className='p-1 border-r-2'>
                <option value="none"> 찾는 팀원 </option>
                <option> 기획자 </option>
                <option> 연출자 </option>
                <option> 출연자 </option>
                <option> 편집자 </option>
            </select>
            {/* 여기서 결정된 내용  */}
            <select className='p-1 border-r-2'>
                <option value="none"> 장르 </option>
                <option> 신입 </option>
                <option> ~ 2년 </option>
                <option> ~ 4년 </option>
                <option> ~ 8년 </option>
            </select>

            {/* 몇 년 경력인지가 중요한 요소인가? */}
            <select className='p-1 border-r-2'>
                <option value="none"> 지역 </option>
                <option > 서울 </option>
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