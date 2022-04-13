import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../modals/Modal";

export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showModal, setShowModal] = useState(false);
    
    const updateScroll = () => {
        setScrollPosition(window.screenY || document.documentElement.scrollTop);
    }
    useEffect(() =>{
        window.addEventListener("scroll", updateScroll);
    });

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className=
        // "block sticky top-0 w-full bg-yellow-400 border-b border-gray-700 py-4"
        {scrollPosition < 350 ? "block sticky transition ease-linear delay-300 top-0 w-full bg-yellow-400 border-b border-gray-700 py-4" : "block sticky transition ease-linear delay-300 top-0 w-full bg-white border-b border-gray-700 py-4"}>
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
                                        <Link className="text-sm text-black font-normal" to="/">팀원 찾기</Link>
                                    </span>
                                    <span>
                                        <Link className="text-sm text-black font-normal" to="/">기획서 찾기</Link>
                                    </span>
                                    <span>
                                        <Link className="text-sm text-black font-normal" to="/">커뮤니티</Link>
                                    </span>
                                    <span>
                                        <Link className="text-sm text-black font-normal" to="/">고객센터</Link>
                                    </span>
                                </div>
                            </div>
                            <div>
                                {/* <a href="/"> */}
                                    <button onClick={ openModal } className="text-sm font-normal border border-black rounded-full px-4 py-2 bg-stone-900 text-white">로그인</button>
                                    <Modal showModal={ showModal } closeModal={ closeModal }></Modal>
                                {/* </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}