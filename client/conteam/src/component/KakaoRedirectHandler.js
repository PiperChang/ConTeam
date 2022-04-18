import React, { useEffect } from "react";
import axios from "axios";

const KakaoRedirectHandler = () => {
    useEffect(() => {
        let code = new URL(window.location.href).searchParams.get("code");
        let grant_type = "authorization_code";
        let client_id = "f010a544bd13eca42ed75db7dc3c0288";

        axios.post(`https://kauth.kakao.com/oauth/token?
            grant_type=${grant_type}
            &client_id=${client_id}
            &redirect_uri=http://localhost:3000/oauth/callback/kakao
            &code=${code}`
        , {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }).then((res) => {
    console.log(res)
      // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
})}, [])
return <div>메인으로 돌아가기</div>
}

export default KakaoRedirectHandler;