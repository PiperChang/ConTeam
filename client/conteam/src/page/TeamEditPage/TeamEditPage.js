import React, { Children, useRef, useState } from 'react'
import Header from '../../component/header/Header'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate } from "react-router-dom";
import parse, { domToReact } from 'html-react-parser'
import './TeamEditPage.css'

export default function TeamEditPage() {
  const navigate = useNavigate()

  const editorRef = useRef();
  const [detailDescription, setDetailDescription] = useState("")
  const handleSaveTeamData = async (e) => {
    e.preventDefault()
    await setDetailDescription(editorRef.current.editor.getData())
  }
  
  //parse option
  const parseOption = {
    replace: (domNode) => {
      if (domNode.name == 'oembed') {
        const url = domNode.attribs.url.split(/[/,?,=]/).slice(-1)[0]
        console.log("d",url);
        return React.createElement(
          'iframe', {
            src : `https://youtube.com/embed/${url}`,
            width : "300",
            height : "300"
          },
          domToReact(domNode.children ,parseOption)
        ) ;
      }
    }
  }

  return (
    <div>
      <Header />
      {/* 각 태그마다 줄바꿈 + */}
      <div className='max-w-7xl min-w-0 w-full m-auto '>
        <form className='block team-edit-form p-7 shadow-md' action='/' method='get'  onSubmit={handleSaveTeamData}>
          <h3 className='font-semibold text-lg py-3'>1. 팀 소dfa개</h3>
          <hr></hr>
          <label for="team_name">팀명</label>
          <input type="text" id='team_name' name='team_name' />
          <label for="short_description">프로젝트 한 줄 설명</label>
          <input type="text" id='short_description' name='short_description' placeholder='ex) ' />
          <label for="category">컨텐츠 분야</label>
          <select id="category">
            <option>웹드라마</option>
            <option>단편 영화</option>
            <option>코믹</option>
            <option>교육</option>
          </select>
          <label for="teammates">현재 팀원</label>
          <input type="number" id='teammates' name='teammates' min={1} className='w-10' />
          {/* 팀원 아이디 치면, 해당 팀원 프로필
          현재 팀원 수 (@아이디+ 역할,@아이디+ 역할,@아이디+ 역할) */}
          {/* 서비스 단계 ( 기획, 팀 모집중, 제작 중 ) */}

          <label for="due_date">모집 마감일</label>
          <input type="date" id='due_date' name='due_date' />

          <label for="active_period">예상 제작 기간</label>
          <input type="number" id='active_period' name='active_period' className=' w-10' min={1} />개월

          <label for="opening_position">모집 인원</label>
          <input type="number" id='opening_position' name='opening_position' min={1} />

          <label for="opening_position">컨텐츠 상세 소개</label>
         
          <CKEditor
            ref={editorRef}
            editor={ClassicEditor}
            data=""
          />
          <input type="hidden" name='detailDescription' value={detailDescription} />
          {/* <button type='submit' className='p-3 rounded-lg text-white bg-gray-900 mt-3 ml-3 float-right'>다음단계</button> */}
          <button type='submit' className='p-3 rounded-lg text-white bg-gray-900 mt-3 float-right' onClick={handleSaveTeamData}>저장하기</button>
        </form>
        {detailDescription}
        {parse(detailDescription, parseOption)}
      </div>
    </div>
  )
}
// 모집 분야