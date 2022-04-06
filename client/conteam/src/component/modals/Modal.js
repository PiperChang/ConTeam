import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ showModal, closeModal }) => {
    return (
        <>
            {showModal ?
                <div className="fixed inset-0 flex justify-center items-center bg-white/20 overflow-x-hidden overflow-y-auto z-50 scroll-smooth ">
                    <div className="p-0 my-auto">
                        <div className="block w-[678px] relative rounded shadow-md bg-white">
                            <div className="w-full h-full min-h-[695px] flex flex-row rounded justify-between bg-white">
                                <div className="flex flex-col w-[360px] py-11 px-14 justify-center items-center text-center flex-[1_0_auto]">
                                    <h2 className="text-xl">간편가입 / 로그인</h2>
                                    <div className="block mt-12">
                                        <Link className="text-sm text-gray-700 border rounded-full" to="/"></Link>
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