import React from 'react'
import { BiTime, BiPencil } from 'react-icons/bi'
import { BsPencil } from 'react-icons/bs'
import { RiRoadMapLine } from 'react-icons/ri'
import { AiOutlineTeam } from 'react-icons/ai'
export default function ProfileCard({ index, boxRef, name }) {
    return (
        <li
            key={index}
            className="bg-white border-neutral drop-shadow h-64 m-6 mx-2 rounded-lg mb-5 w-64 "
            ref={boxRef}
        >
            <div className='h-1/3 overflow-hidden rounded-t-lg bg-cover bg-[url(https://wp-blog.toss.im/wp-content/uploads/2022/03/033_mymoneystory2-2-1536x1152.jpeg)]' >
                <a className='w-full h-full bg-black'>
                <button className='absolute top-7 left-[50%] -translate-x-1/2 bg-orange-600 rounded-full p-0.5 px-3 text-lg text-white'>자세히 보기</button>
                </a>
            </div>
            <div className="p-3 px-4">
                <div className="flex mb-1 items-center">
                    <p className="mr-2 font-semibold ">컨텐츠명</p>
                </div>

                <div className="flex items-center">
                    {/* 경력, 위치 */}
                    <AiOutlineTeam className='mr-1' /><p className='mr-3'>5명</p>
                    <RiRoadMapLine className='mr-1' />
                    <p>위치 : 서울</p>
                </div>
                <div className='overflow-hidden text-sm h-10 my-2 text-ellipsis'>저희는 어쩌고한 컨텐츠를 기획중인 어쩌고입니다 행복한 팀을 꾸려나가 봅시다 ㅎㅎ</div>  
                <div className="absolute bottom-4 bg-gray-300 rounded-full px-1.5 text-sm w-fit p-0 m-0 flex items-center h-6">
                    {/* 역할 => 아이콘 변화 */}
                    <BiPencil className='text-red-500 mr-1' />
                    <p>기획자</p>
                </div>
            </div>
        </li>)
}