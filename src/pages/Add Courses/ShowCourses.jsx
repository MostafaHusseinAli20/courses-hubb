import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCourses , DeleteCourses } from "./services/addCourses";
function ShowCourses() {
    const [course , setCourse] = useState([])
    const nav = useNavigate();
    useEffect(() => {
        getAllCourses()
        .then(res => setCourse(res.data))
        .catch(err => console.log(err.message))
    } , [])
    const Del = (id) => {
            DeleteCourses(id)
            .then(() => {
                // alert("you want to delete Course!");
                const show = document.querySelector(".show");
                const alert = document.createElement("div");
                alert.className = `alert alert-warning w-50 mx-auto text-center`
                alert.textContent = `Deleted Successfuly!`
                show.appendChild(alert);
                setTimeout(() => {
                    alert.remove();
                    nav("/addCourses")
                }, 2000)
            })
    }
    return ( 
        <>
           <section className="container my-5 show-course">
            <h1 className='gradiant text-center my-5'>Show New Courses</h1>
            <div className="icon text-center text-light">
                <i className="fa-solid fa-arrow-down fa-2x mb-5"></i>
            </div>
            <div className="show my-5">

            </div>
            <table className="table my-4 table-dark text-center">
                <thead>
                    <tr>
                        <th>Type Course</th>
                        <th>Title Course</th>
                        <th>Mentor Course</th>
                        <th>Viewing platform</th>
                        <th>Paid Or Free</th>
                        <th>Format</th>
                    </tr>
                </thead>
                {
                    course.length > 0 &&
                    <tbody>
                        {
                            course.map(course => (
                                <tr key={course.id}>
                                    <td>{course.selectiType}</td>
                                    <td>{course.TCourse}</td>
                                    <td>{course.MCourse}</td>
                                    <td>{course.ViewPlat}</td>
                                    <td>{course.selectPay}</td>
                                    <td>
                                        <button
                                        onClick={e => Del(course.id)} type="button" className="text-light btn btn-sm btn-light">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                }
            </table>
           </section>
        </>
     );
}

export default ShowCourses;