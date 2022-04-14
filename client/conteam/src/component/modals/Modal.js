import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ showModal, closeModal }) => {
    return (
        <>
            {showModal ?
                <div className="fixed inset-0 flex justify-center items-center bg-white/50 overflow-x-hidden overflow-y-auto z-50 scroll-smooth ">
                    <div className="p-0 my-auto">
                        <div className="block w-[500px] relative rounded shadow-2xl bg-white">
                            <div className="w-full h-full min-h-[600px] flex flex-row rounded justify-between bg-white">
                                <div className="flex flex-col w-[360px] py-11 px-14 justify-center items-center text-center flex-[1_0_auto]">
                                    <h1 className="text-3xl font-bold">CONTEAM</h1>
                                    <h2 className="mt-10 text-xl">간편가입 / 로그인</h2>
                                    <div className="block w-80 mt-16">
                                        <Link className="block w-full h-14 leading-[56px] rounded bg-[#4267B2] text-white font-medium" to="/">
                                            <img className="inline w-6 h-6 mx-2 -mt-1"
                                            alt="facebook_icon" src="facebook_icon.svg" />
                                            페이스북 계정으로 로그인 하기
                                        </Link>
                                        <Link className="block w-full h-14 mt-3 leading-[56px] rounded bg-[#FEE500] text-[#381F1F] font-medium" to="/">
                                            <img className="inline w-10 h-10 -mt-1"
                                            alt="kakaotalk_icon" src="kakaotalk_icon.svg" />
                                            카카오톡 계정으로 로그인 하기
                                        </Link>
                                        <Link className="block w-full h-14 mt-3 leading-[56px] rounded bg-[#03C75A] text-white font-medium" to="/">
                                            <img className="inline w-10 h-10 -mt-1"
                                            alt="naver_icon" src="naver_icon.svg" />
                                            네이버 계정으로 로그인 하기
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="block absolute top-3 right-3">
                                <button className="p-1 m-0" onClick={ closeModal }>
                                    &#x2716;
                                </button>
                            </div>
                        </div>
                    </div>
                </div> : null
            }
        </>
    )
}

export default Modal;