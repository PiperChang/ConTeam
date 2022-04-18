import React from "react";

export default function Main2() {
    const teams = [
        {
            no: "1",
            name: "PLAN UG",
            img: "이미지1",
            title: "글로벌 외주회사 기획자 모집중",
            position: "기획자",
            text: "외주/ 상용화 단계/ 현재 구성원 1명/",
            date: "2시간전"
        },
        {
            no: "2",
            name: "참스틱스",
            img: "이미지2",
            title: "디자인/예술 기반 아트 커머스 플랫폼",
            position: "기획자",
            text: "커머스/ 제품, 서비스 확장 단계/ 현재 구성원 5명/",
            date: "5시간전"
        },
        {
            no: "3",
            name: "플레이웰",
            img: "이미지3",
            title: "사용자 고유명사들을 바탕으로 취향저격 장소...",
            position: "개발자",
            text: "여행서비스/ 프로토타입 완성 단계/ 현재 구성원 5명/",
            date: "7시간전"
        }
    ]
    
    const teamList = teams.map((team) => (
            <div key={team.no} className="sm:px-3 sm:basis-full sm:max-w-full md:px-3.5 md:basis-1/2 md:max-w-[50%] lg:px-4 lg:basis-1/3 lg:max-w-[33.333333%]">
                <div className="w-full h-full">
                    <div className="h-80 border border-black rounded-lg">
                        <div className="h-1/3 border-b border-black text-center">
                            {team.img}
                        </div>
                        <div className="mt-3">
                            <div className="flex flex-col px-4">
                                {/* <div className=""> */}
                                    <div className="w-full h-full space-y-6">
                                        <div className="mt-4">
                                            <div className="text-md font-medium ">
                                                {team.title}
                                            </div>
                                            <div className="text-sm font-normal ">
                                                by {team.name}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-md font-medium mb-2">
                                                {team.position}
                                            </div>
                                            <div className="text-sm font-normal text-gray-700">
                                                {team.text}
                                            </div>
                                        </div>
                                        <div className="hidden 2xl:block">
                                            <div className="text-xs font-normal text-gray-500">
                                                {team.date}
                                            </div>
                                        </div>
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    ))
        
    return (
        <div className="flex flex-col">
            <div className="block">
                <div className="flex justify-center">
                    <div className="lg:mx-16 mx-6 min-w-0 max-w-7xl w-full">
                        <div className="pt-10 pb-4 block">
                            <div className="flex flex-row items-center mb-8">
                                <div className="block">
                                    <p className="uppercase tracking-wider text-s font-bold text-black">
                                        기대되는 새로운 팀
                                    </p>
                                </div>
                            </div>
                            <div className="blcok">
                                <div className="flex flex-row items-start flex-nowrap lg:-mx-4">
                                    {/* <div className="sm:px-3 sm:basis-full sm:max-w-full md:px-3.5 md:basis-1/2 md:max-w-[50%] lg:px-4 lg:basis-1/3 lg:max-w-[33.333333%]">
                                        <div className="w-full h-full">
                                            <div className="h-80 border border-black rounded-lg">
                                                <div className="h-1/3 border-b border-black text-center">
                                                    이미지
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {teamList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}