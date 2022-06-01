import React, { Children, useRef, useState } from 'react'
import Header from '../../component/header/Header'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate } from "react-router-dom";
import parse, { domToReact } from 'html-react-parser'
import './EditTeamInfoPage.module.css'

export default function EditTeamInfoPage() {
  const navigate = useNavigate()
  const editorRef = useRef();
  const [description, setDescription] = useState({})

  const handleChange = (e) => {
    const newDescription = description
    newDescription[e.target.name] = e.target.value
    setDescription(newDescription)
  }

  const handleSaveTeamData = async (e) => {
    e.preventDefault()
    setDescription(description)
    navigate('/team-edit-preview', {
      state: {      
        data: {
          description :description, 
          detail: editorRef.current.editor.getData()
        }
      }
    })
  }

  return (
    <div>
      <Header />
      {/* 각 태그마다 줄바꿈 + */}
      <div className='max-w-7xl min-w-0 w-full m-auto '>
        <form className='block team-edit-form p-7 shadow-md' action='/' method='get' onSubmit={handleSaveTeamData}>
          <h3 className='font-semibold text-lg py-3'>1. 팀 소개</h3>
          <hr></hr>
          <label for="team_name" >팀명</label>
          <input type="text" onChange={handleChange} id='team_name' name='team_name' />
          <label for="short_description">프로젝트 한 줄 설명</label>
          <input type="text" id='short_description' onChange={handleChange} name='short_description' placeholder='ex) ' />
          <label for="category">컨텐츠 분야</label>
          <select id="category" onChange={handleChange}>
            <option>웹드라마</option>
            <option>단편 영화</option>
            <option>코믹</option>
            <option>교육</option>
          </select>
          <label for="teammates" >현재 팀원</label>
          <input type="number" onChange={handleChange} id='teammates' name='teammates' min={1} className='w-10' />

          <label for="due_date">모집 마감일</label>
          <input type="date" id='due_date' onChange={handleChange} name='due_date' />

          <label for="active_period">예상 제작 기간</label>
          <input type="number" id='active_period' name='active_period' onChange={handleChange} className=' w-10' min={1} />개월

          <label for="opening_position">모집 인원</label>
          <input type="number" id='opening_position' name='opening_position' min={1} onChange={handleChange}/>

          <label for="opening_position">컨텐츠 상세 소개</label>

          <CKEditor
            ref={editorRef}
            editor={ClassicEditor}
            data=""
          />

          {/* <input type="hidden" name='detailDescription' value={} /> */}
          <button type='submit' className='p-3 rounded-lg text-white bg-gray-900 mt-3 float-right' >저장하기</button>
        </form>
      </div>
    </div>
  )
}

