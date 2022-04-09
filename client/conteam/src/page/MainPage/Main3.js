import React from "react";

export default function Main3() {
    const mates = [
        {
            no: "1",
            name: "김OO",
            profile: "이미지1",
            address: "서울특별시 성북구",
            age: "28세",
            title: "기획자, 개발자 가능",
            position: "기획자",
            text: "2년차/ 창업 경험/ 브랜딩/ 개발 경험/",
            date: "2시간전"
        },
        {
            no: "2",
            name: "김OO",
            profile: "이미지2",
            address: "서울특별시 성북구",
            age: "28세",
            title: "기획자, 개발자 가능",
            position: "기획자",
            text: "2년차/ 창업 경험/ 브랜딩/ 개발 경험/",
            date: "4시간전"
        },
        {
            no: "3",
            name: "김OO",
            profile: "이미지3",
            address: "서울특별시 성북구",
            age: "28세",
            title: "기획자, 개발자 가능",
            position: "기획자",
            text: "2년차/ 창업 경험/ 브랜딩/ 개발 경험/",
            date: "7시간전"
        }
    ]
    
    const mateList = mates.map((mate) => (
            <div className="sm:px-3 sm:basis-full sm:max-w-full md:px-3.5 md:basis-1/2 md:max-w-[50%] lg:px-4 lg:basis-1/3 lg:max-w-[33.333333%]">
                <div className="w-full h-full">
                    <div className="h-80 border border-black rounded-lg">
                        <div className="h-1/3 border-b border-black text-center">
                            {/* {team.img} */}
                        </div>
                        <div className="mt-3">
                            <div className="flex flex-col px-4">
                                {/* <div className=""> */}
                                    <div className="w-full h-full space-y-6">
                                        <div className="mt-4">
                                            <div className="text-md font-medium ">
                                                {/* {team.title} */}
                                            </div>
                                            <div className="text-sm font-normal ">
                                                {/* by {team.name} */}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-md font-medium mb-2">
                                                {/* {team.position} */}
                                            </div>
                                            <div className="text-sm font-normal text-gray-700">
                                                {/* {team.text} */}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-normal text-gray-500">
                                                {/* {team.date} */}
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
                                    {mateList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}