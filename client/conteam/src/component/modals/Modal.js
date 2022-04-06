import React from "react";

const Modal = ({ showModal, closeModal }) => {
    return (
        <>
            {showModal ?
                <div className="absolute w-full h-full z-10 inset-0 flex flex-col items-center">
                    <div className="fixed w-full h-full bg-white/20 ">
                        <div className="absolute w-1/2 mx-auto border rounded bg-white">
                            <div>메뉴</div>
                            <button onClick={ closeModal }>&times;</button>
                        </div>
                    </div>
                </div> : null
            }
        </>
    )
}

export default Modal;