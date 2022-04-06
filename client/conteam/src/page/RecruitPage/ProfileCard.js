import React from 'react'
import { BiTime, BiPencil } from 'react-icons/bi'
import { BsPencil } from 'react-icons/bs'
import { RiRoadMapLine } from 'react-icons/ri'
export default function ProfileCard({ index, boxRef }) {
    return (
        <li
            key={index}
            className="bg-white border-neutral drop-shadow h-80 m-6 mx-2 rounded-lg mb-5 w-64 "
            ref={boxRef}
        >
            <div className='h-3/5 overflow-hidden rounded-t-lg'>
                <img className="object-cover " src="https://file.mk.co.kr/meet/neds/2020/07/image_readtop_2020_693310_15940817614269874.jpg" />
            </div>
            <div className="p-3 px-4">
                <div className="flex mb-1 items-center">
                    <p className="mr-2 font-semibold text-lg">이주빈</p>
                    <div className="bg-gray-300 rounded-full px-1.5 text-sm p-0 m-0 flex items-center h-6">
                        {/* 역할 => 아이콘 변화 */}
                        <BiPencil className='text-red-500 mr-1' />
                        <p>기획자</p>
                    </div>
                </div>
                <div className="flex items-center">
                    {/* 경력, 위치 */}
                    <BiTime className='mr-1' /><p className='mr-5'>경력 : 신입</p>
                    <RiRoadMapLine className='mr-1' />
                    <p>위치 : 서울</p>
                </div>
                <button className='absolute right-4 bottom-4 bg-orange-600 rounded-full p-0.5 px-3 text-sm text-white'>자세히 보기</button>
            </div>
        </li>)
}