import React from 'react'
import Header from '../../component/header/Header'
import './TeamEditPage.css'

export default function TeamEditPage() {
  return (
    <div>
      <Header />
      {/* 각 태그마다 줄바꿈 + */}
      <div className='max-w-7xl min-w-0 w-full lg:mx-16 mx-6'>
        <form className='block team-edit-form'>
          <label for="team_name">팀명</label>
          <input type="text" id='team_name' name='team_name'/>
          <label for="short_description">프로젝트 한 줄 설명</label>
          <input type="text" id='short_description' name='short_description'/>
          <label for="category">컨텐츠 분야</label>
          <select id = "category">
            <option>웹드라마</option>
            <option>단편 영화</option>
            <option>코믹</option>
            <option>교육</option>
          </select>
          <label for="teammates">현재 팀원</label>
          <input type="number" id='teammates' name='teammates'/>
          {/* 팀원 아이디 치면, 해당 팀원 프로필
          현재 팀원 수 (@아이디+ 역할,@아이디+ 역할,@아이디+ 역할) */}
          {/* 서비스 단계 ( 기획, 팀 모집중, 제작 중 ) */} 
          
          
          <label for="due_date">모집 마감일</label>
          <input type="date" id='due_date' name='due_date'/>

          <label for="active_period">예상 제작 기간</label>
          <input type="number" id='active_period' name='active_period'/>

          <label for="opening_position">모집 인원</label>
          <input type="number" id='opening_position' name='opening_position'/>

          <label for="opening_position">컨텐츠 상세 소개</label>
          <input type="number" id='opening_position' name='opening_position'/>
        </form>
      </div>
    </div>
  )
}
