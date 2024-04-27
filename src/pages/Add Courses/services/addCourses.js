import axios from "axios";
const url = "http://localhost:9000/course"

//Get All Courses
export async function getAllCourses(){
    try {
        return await axios.get(url)
    }catch(err){
        console.log(err.message);
    }
}
// Add Courses
export async function postCourses(course){
    try {
        return await axios.post(url , course)
    }catch(err){
        console.log(err.message);
    }
}

// Delete Courses
export async function DeleteCourses(id){
    try {
        return await axios.delete(`${url}/${id}`)
    }catch(err){
        console.log(err.message);
    }
}