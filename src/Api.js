import axios from 'axios';


const url = 'http://127.0.0.1:8000';
// const id = useParams()

export const getBaner = async () => {
    try {
        const response = await axios.get(`${url}/baners`);
        return response.data
    } catch (err) {
        console.log(err)
    }
}

// GET ALL NEWS
export const getAllNews = async () => {
    try {
        const response = await axios.get(`${url}/newss`)
        return response.data
    } catch (err) {
        console.log(err);
    }
}

// GET SINGLE DATA 
export const news = async (id) => {
    try {
        const response = await axios.get(`${url}/news/${id}`)
        return response.data

    } catch (err) {
        console.log(err)
    }
}

// GET ALL FACILITY
export const getAllFacility = async () => {
    try {
        const result = await axios.get(`${url}/facility`)
        return result.data
    } catch (err) {
        console.log(err)
    }
}

export const getAllTeacher = async () => {
    try{
        const resoult = await axios.get(`${url}/teachers`)
        return resoult.data
    }catch (err) {
        console.log(err)
    }
}
