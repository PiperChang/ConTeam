import axios from "axios"
const GET_API = process.env.REACT_APP_DB_HOST;

const getTeammateSearch = async keywordAndFilter => {
    const response = await axios.get(`${GET_API}/teammate/keyword=${keywordAndFilter.keyword}&location=${keywordAndFilter.keyword}`)
    
}
