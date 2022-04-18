const CLIENT_ID = "f010a544bd13eca42ed75db7dc3c0288"
const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao"

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;