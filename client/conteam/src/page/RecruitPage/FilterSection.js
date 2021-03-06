import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import axios from "axios"

export default function FilterSection({ profiles, setProfiles }) {
    const [showSearch, setShowSearch] = useState(false)
    const [optionList, setOptionList] = useState({
        "keyword": "",
        "location": "",
        "job": "",
        "career": "",
        "tags": ""
    })


    // setOptionList 변화 확인 용
    useEffect(() => {
        console.log(optionList);
    }, [optionList])


    //필터링 클릭 시 실행
    const FilterRecruitsResult = async (e) => {
        e.preventDefault()
        const value = e.target.options[e.target.selectedIndex].value
        const category = e.target.classList[0]
        setOptionList({ ...optionList, [category]: value })
    }

    //검색 시 실행
    const SearchRecruitsResult = async (e) => {
        e.preventDefault()
        const searchKeyword = e.target[0].value.toLowerCase()
        setOptionList({ ...optionList, keyword: searchKeyword })
        // const searchedProfiles = await axios.get('www.naver.whatever')
        // setProfiles(searchedProfiles)
        console.log(optionList);
    }

    
    return (
        <div className='flex items-center relative mt-5'>
            <div className='p-1'><AiOutlineMenu /></div>
            <select className='job p-1 border-r-2' onChange={FilterRecruitsResult}>
                <option value="none"> 직업 </option>
                <option> 기획자 </option>
                <option> 연출자 </option>
                <option> 출연자 </option>
                <option> 편집자 </option>
            </select>

            {/* 여기서 결정된 내용  */}
            <select className='career p-1 border-r-2' onChange={FilterRecruitsResult}>
                <option value="none"> 경력 </option>
                <option> 신입 </option>
                <option> ~ 2년 </option>
                <option> ~ 4년 </option>
                <option> ~ 8년 </option>
            </select>

            {/* 몇 년 경력인지가 중요한 요소인가? */}
            <select className='location p-1 border-r-2' onChange={FilterRecruitsResult}>
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
                    <form onSubmit={SearchRecruitsResult}>
                        <input placeholder='검색' className='mx-1' />
                    </form> : <></>
                }
                <AiOutlineSearch className='mx-1' onClick={() => { setShowSearch(!showSearch); }} />
            </div>
        </div>
    )
}

// x 눌러서 옵션 list에서 삭제할 수 있는 박스 추가 