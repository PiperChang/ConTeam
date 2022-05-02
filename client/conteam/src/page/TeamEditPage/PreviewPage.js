import React from 'react'
import Header from '../../component/header/Header'
import {useLocation} from 'react-router-dom' 
import parse, { domToReact } from 'html-react-parser'
import './TeamEditPage.css'

export default function PreviewPage() {
  const location = useLocation()
  const data = location.state.data
  console.log(data.description);
  //parse option
  const parseOption = {
    replace: (domNode) => {
      //video
      if (domNode.name == 'oembed') {
        const url = domNode.attribs.url.split(/[/,?,=]/).slice(-1)[0]
        console.log("d",url);
        return React.createElement(
          'iframe', {
            src : `https://youtube.com/embed/${url}`,
            width : "100%",
            height : "500vh",
            allowfullscreen : "true",
            frameborder:"0"
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
        {parse(data.detail, parseOption)}
      </div>
    </div>
  )
}
// 모집 분야