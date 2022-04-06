import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="block w-full py-6">
            <div className="flex justify-center items-center md:justify-center">
                <div className="max-w-7xl min-w-0 w-full lg:mx-16 mx-6">
                    <div className="flex flex-row">
                        <div className="block">
                            <Link className="text-3xl font-bold" to="/">
                                CONTEAM
                                {/* <img alt="logo"/> */}
                            </Link>
                        </div>
                        <div className="block flex-[1_0_auto]"></div>
                        <div className="flex flex-row items-center space-x-6">
                            <div className="hidden sm:block">
                                <div className="flex space-x-4">
                                    <span>
                                        <Link className="text-sm text-black font-normal" to="/">서비스소개</Link>
                                    </span>
                                    <span>
                                        <Link className="text-sm text-black font-normal" to="/">회원약관</Link>
                                    </span>
                                    <span>
                                        <Link className="text-sm text-black font-normal" to="/">개인정보처리방침</Link>
                                    </span>
                                    <span>
                                        <Link className="text-sm text-black font-normal" to="/">고객센터</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}