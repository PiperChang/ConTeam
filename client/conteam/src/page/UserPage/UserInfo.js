import React from "react";

export default function UserInfo() {
    return (
        <div className="text-center">
            <div className="relative inline-block text-left w-[650px] mt-14 pb-9">
                <span className="absolute inline-block text-left top-6 right-16 w-60 h-60 rounded-full overflow-hidden hover:opacity-70">
                    <label for="profile_photo" className="cursor-default text-left">
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
                            <select type="text" placeholder="ex) 01012345678" className="w-32 h-10 box-border border-b border-gray-400 rounded px-2 text-sm text-gray-800 align-middle bg-white">
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
                            <select type="text" placeholder="ex) 01012345678" className="w-32 h-10 box-border border-b border-gray-400 rounded px-2 text-sm text-gray-800 align-middle bg-white">
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
                            <select type="text" placeholder="ex) 01012345678" className="w-32 h-10 box-border border-b border-gray-400 rounded px-2 text-sm text-gray-800 align-middle bg-white">
                                <option>기획자</option>
                                <option>스태프</option>
                                <option>출연진</option>
                                <option>기타</option>
                            </select>
                            <input type="text" placeholder="최대 2가지 선택 가능 ex) 기획자, 배우" className="max-w-[420px] w-[530px] h-10 box-border border-b border-gray-400 rounded px-2 text-sm text-gray-800 align-middle bg-white ml-1"></input>
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
            </div>
        </div>
    )
}