import React from "react";

export default function Main1() {
    return (
        <div>
            <div className="h-[75px] block"></div>
                <div className="w-full bg-yellow-400 border-b border-gray-700 py-9">
                    <div className="max-w-7xl mx-auto px-4 lg:mx-16">
                        <div className="flex justify-between md:justify-between">
                            {/* <div className="flex flex-row w-full"> */}
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
                                        <button className="w-52 h-16 border border-black rounded-md px-4 py-2 ease-in-out duration-300 hover:bg-black hover:text-white">
                                        서비스 안내
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    <div className="w-1/2 bg-white border border-black rounded-md">
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