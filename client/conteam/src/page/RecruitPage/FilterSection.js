import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'

export default function FilterSection() {

    const [showSearch, setShowSearch] = useState(false)

    return (
        <div className='flex items-center relative'>
            <div className='p-1'><AiOutlineMenu /></div>
            <div className='p-1'>직무</div>
            <div className='p-1'>경력</div>
            <div className='p-1'>직무</div>
            <div className='absolute flex right-0 items-center'>
                {showSearch ?
                    <input placeholder='검색' className='mx-1  '  /> : <></>
                }
                <AiOutlineSearch className='mx-1' onClick={() => { setShowSearch(!showSearch);  }} />
            </div>
        </div>
    )
}