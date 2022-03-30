import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="fixed w-full bg-yellow-400 border-b border-gray-700 py-4">
            <div className="max-w-7xl mx-auto px-4 lg:mx-16">
                <div className="flex justify-between items-center md:justify-between">
                    <Link className="flex justify-start text-3xl font-bold" to="/">
                        CONTEAM
                        {/* <img alt="logo"/> */}
                    </Link>
                    <div className="flex-[1_0_auto]"></div>
                    <div className="flex items-center space-x-10">
                        <div className="hidden md:block">
                            <div className="flex space-x-5">
                                <span>
                                    <Link to="/">팀원 찾기</Link>
                                </span>
                                <span>
                                    <Link to="/">기획서 찾기</Link>
                                </span>
                                <span>
                                    <Link to="/">커뮤니티</Link>
                                </span>
                                <span>
                                    <Link to="/">고객센터</Link>
                                </span>
                            </div>
                        </div>
                        <div>
                            <a href="/">
                                <button className="border border-black rounded-full px-4 py-2 ease-in-out duration-300 hover:bg-black hover:text-white">로그인</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}