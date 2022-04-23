import React, { useEffect, useState } from "react";

export default function UserInfo() {
    const [role, setRole] = useState("planner")
    const [selectRole, setSelectRole] = useState([]);

    const roleChangeHandler = (e) => {
        setRole(e.target.value)
        console.log(e.target.value)
    }

    const roleClickHandler = (e) => {
        if (selectRole.length === 2) {
            alert("세부 역할은 최대 2가지까지 선택 가능합니다.")
            console.log(selectRole)
        } else {
            console.log(e.target.getAttribute("value"))
            setSelectRole([...selectRole, e.target.getAttribute("value")])
        }
    }

    const roleTagChangeHandler = (e) => {
        if (selectRole.length === 3) {
            alert("세부 역할은 최대 2가지까지 선택 가능합니다.")
            // setSelectRole
        } else {
            const role_tag_list = e.target.value
            console.log(role_tag_list)
            const a = role_tag_list.split(",")
            console.log(a)
            setSelectRole(a)
            console.log(e.target.value)
        }
    }

    useEffect(() => {
        if (selectRole.length === 3) {
            alert("세부 역할은 최대 2가지까지 선택 가능합니다.")
        }
        console.log(selectRole)
    }, [role, selectRole])

    const planner_tag = ["장르1", "장르2", "장르3", "장르4", "장편", "단편"]
    const staff_tag = ["촬영자", "편집자", "연출자"]
    const cast_tag = ["배우", "코미디언", "가수", "아역배우", "동물배우"]

    function role_tag() {
        if (role === "planner") {
            return planner_tag.map((tag, index) => (
                <span key={index} value={tag} className="text-left w-auto px-4 py-2 mx-1 my-2 text-sm border border-gray-400 text-gray-500 rounded-md box-border inline-block cursor-pointer hover:border-gray-900 hover:text-gray-900" onClick={ roleClickHandler }>{tag}</span>
            ))
        } else if (role === "staff") {
            return staff_tag.map((tag, index) => (
                <span key={index} value={tag} className="text-left w-auto px-4 py-2 mx-1 my-2 text-sm border border-gray-400 text-gray-500 rounded-md box-border inline-block cursor-pointer hover:border-gray-900 hover:text-gray-900" onClick={ roleClickHandler }>{tag}</span>
            ))
        } else if (role === "cast") {
            return cast_tag.map((tag, index) => (
                <span key={index} value={tag} className="text-left w-auto px-4 py-2 mx-1 my-2 text-sm border border-gray-400 text-gray-500 rounded-md box-border inline-block cursor-pointer hover:border-gray-900 hover:text-gray-900" onClick={ roleClickHandler }>{tag}</span>
            ))
        } else {
            return null;
        }
    }

    return (
        <div className="text-center">
            <div className="relative inline-block text-left w-[650px] mt-14 pb-9">
                <span className="absolute inline-block text-left top-6 right-16 w-60 h-60 rounded-full overflow-hidden hover:opacity-70">
                    <label className="cursor-default text-left">
                        <div className="absolute opacity-0 hover:opacity-90  top-0 text-center cursor-pointer duration-300 w-full h-60 rounded-[50%]">
                            <span className="mt-24 ml-1 w-16 h-10 tracking-widest font-semibold text-center leading-10 inline-block text-xl text-white">EDIT</span>
                        </div>
                    </label>
                    <img src="profile.svg" />
                </span>
                <span className="absolute text-left right-[148px] top-[270px] text-red-600 text-sm font-bold cursor-pointer hover:border-b">프로필 삭제</span>
                <div className="block text-left">
                    <div className="block text-left mb-5">
                        <span className="inline-block text-left w-24 leading-10 text-sm align-top">이름</span>
                        <span className="inline-block text-left">
                            <input type="text" placeholder="이름" className="w-32 h-10 box-border border-b border-gray-400 rounded px-2 text-sm text-gray-800 align-middle bg-white"></input>
                        </span>
                    </div>
                    <div className="block text-left mb-5">
                        <span className="inline-block text-left w-24 leading-10 text-sm align-top">생년월일</span>
                        <span className="inline-block text-left">
                            <input type="text" placeholder="ex) 950714" className="w-32 h-10 box-border border-b border-gray-400 rounded px-2 text-sm text-gray-800 align-middle bg-white"></input>
                        </span>
                    </div>
                    <div className="block text-left mb-5">
                        <span className="inline-block text-left w-24 leading-10 text-sm align-top">거주지역</span>
                        <span className="inline-block text-left">
                            <select name="region" className="w-32 h-10 box-border border-b border-gray-400 rounded px-2 text-sm text-gray-800 align-middle bg-white">
                                <option>서울특별시</option>
                                <option>부산광역시</option>
                                <option>인천광역시</option>
                                <option>대구광역시</option>
                                <option>광주광역시</option>
                                <option>대전광역시</option>
                                <option>울산광역시</option>
                                <option>경기도</option>
                                <option>강원도</option>
                                <option>충청남도</option>
                                <option>충청북도</option>
                                <option>경상북도</option>
                                <option>경상남도</option>
                                <option>전라북도</option>
                                <option>전라남도</option>
                                <option>제주도</option>
                            </select>
                        </span>
                    </div>
                    <div className="block text-left mb-5">
                        <span className="inline-block text-left w-24 leading-10 text-sm align-top">전화번호</span>
                        <span className="inline-block text-left">
                            <input type="text" placeholder="ex) 01012345678" className="w-32 h-10 box-border border-b border-gray-400 rounded px-2 text-sm text-gray-800 align-middle bg-white"></input>
                        </span>
                    </div>
                    <div className="block text-left mb-5">
                        <span className="inline-block text-left w-24 leading-10 text-sm align-top">경력</span>
                        <span className="inline-block text-left">
                            <select className="w-32 h-10 box-border border-b border-gray-400 rounded px-2 text-sm text-gray-800 align-middle bg-white">
                                <option>1년 미만</option>
                                <option>2~3년 차</option>
                                <option>4~5년 차</option>
                                <option>6~7년 차</option>
                                <option>7~10년 차</option>
                                <option>10년 이상</option>
                            </select>
                        </span>
                    </div>
                    <div className="block text-left mb-5">
                        <span className="inline-block text-left w-24 leading-10 text-sm align-top">상태</span>
                        <span className="inline-block text-left">
                            <select className="w-32 h-10 box-border border-b border-gray-400 rounded px-2 text-sm text-gray-800 align-middle bg-white">
                                <option>구직 중</option>
                                <option>구인 중</option>
                                <option>재직 중</option>
                                <option>표시 안함</option>
                            </select>
                        </span>
                    </div>
                    <div className="block text-left mb-5">
                        <span className="inline-block text-left w-24 leading-10 text-sm align-top">역할</span>
                        <span className="inline-block text-left">
                            <select name="role" className="w-32 h-10 box-border border-b border-gray-400 rounded px-2 text-sm text-gray-800 align-middle bg-white" value={ role } onChange={ roleChangeHandler }>
                                <option value="planner">기획자</option>
                                <option value="staff">스태프</option>
                                <option value="cast">출연진</option>
                                <option value="etc">기타</option>
                            </select>
                            <input type="text" defaultValue={ selectRole } onChange={ roleTagChangeHandler } placeholder="최대 2가지 선택 가능 ex) 기획자, 배우" className="max-w-[420px] w-[530px] h-10 box-border border-b border-gray-400 rounded px-2 text-sm text-gray-800 align-middle bg-white ml-1"></input>
                            <div className="block"></div>
                            { role_tag() }
                        </span>
                    </div>
                    <div className="block text-left mb-5">
                        <span className="inline-block text-left w-24 leading-10 text-sm align-top">자격증</span>
                        <span className="inline-block text-left">
                            <input type="text" placeholder="ex) 1종 보통 운전면허, 토익 OOO점" className="max-w-[550px] w-[630px] h-10 box-border border-b border-gray-400 rounded px-2 text-sm text-gray-800 align-middle bg-white"></input>
                        </span>
                    </div>
                    <div className="block text-left mb-5">
                        <span className="inline-block text-left w-24 leading-10 text-sm align-top">세부사항</span>
                        <span className="inline-block text-left">
                            <textarea type="text" placeholder="ex) 대표작, 수상경력 등등" className="max-w-[550px] w-[630px] h-48 box-border border-b border-gray-400 rounded p-2 text-sm text-gray-800 align-middle bg-white resize-none"></textarea>
                        </span>
                    </div>
                    <div className="block text-left mb-5">
                        <span className="inline-block text-left w-24 leading-10 text-sm align-top">자기소개</span>
                        <span className="inline-block text-left">
                            <textarea type="text" placeholder="간단한 자기소개를 작성해 주세요." className="max-w-[550px] w-[630px] h-48 box-border border-b border-gray-400 rounded p-2 text-sm text-gray-800 align-middle bg-white resize-none"></textarea>
                        </span>
                    </div>
                </div>
                <div className="block text-left mt-7">
                    <div className="block text-left">
                        <span className="inline-block box-border font-medium text-center text-sm rounded cursor-pointer align-middle bg-yellow-400 hover:bg-yellow-400/80 hover:text-black border-none duration-200 leading-10 text-gray-800 ml-24 mr-1 w-28 h-10">수정완료</span>
                        <span className="inline-block box-border font-medium text-center text-sm rounded cursor-pointer align-middle text-gray-500 hover:text-black border-none duration-200 leading-10 w-20 mr-1">취소</span>
                    </div>
                </div>
            </div>
        </div>
    )
}