import React from "react";

export default function Main1() {
    return (
        <div className="block">
            {/* header 컴포넌트에서 fixed 값 사용 시 필요
            <div className="h-[70px] block"></div> */}
                <div className="flex justify-center bg-yellow-400 border-b border-gray-700">
                    <div className="max-w-7xl min-w-0 w-full lg:mx-16 mx-6">
                        {/* <div className="flex justify-between md:justify-between"> */}
                            <div className="flex flex-row w-full">
                                <div className="flex-[1_0_auto]">
                            <div className="flex flex-col h-full py-12 space-y-16">
                                <h2 className="text-black text-7xl">
                                슬로건
                                </h2>
                                <h3 className="text-lg">
                                서비스 소개
                                </h3>
                                <div>
                                    <span>
                                        <button className="w-52 h-16 border border-black rounded-md px-4 py-2 bg-black text-white">
                                        서비스 안내
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    <div className="hidden mt-8 mb-6 sm:block w-1/2 bg-white border border-black rounded-md">
                        <ul className="flex p-4 space-x-2">
                            <li className="w-3 h-3 border border-black rounded-full"></li>
                            <li className="w-3 h-3 border border-black rounded-full"></li>
                            <li className="w-3 h-3 border border-black rounded-full"></li>
                        </ul>
                            <div>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}