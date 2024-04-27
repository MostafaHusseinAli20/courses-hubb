import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCourses } from "./services/addCourses";
function AddCoursePage() {
    const [course , setCourse] = useState({
        selectiType : "",
        TCourse : "",
        MCourse : "",
        ViewPlat : "",
        selectPay : ""
    })
    const nav = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        // Validate
        if(course.selectiType && course.TCourse && course.MCourse && course.ViewPlat && course.selectPay){
            postCourses(course).then(() => {
                
                const show = document.querySelector(".show");
                const alert = document.createElement("div");
                alert.className = `alert alert-success w-50 mx-auto my-4 text-center`
                alert.textContent = `Course Added Successfully!`
                show.appendChild(alert);
                setTimeout(() => {
                    alert.remove();
                    nav("/showCourses");
                }, 2000)
                
            }).catch(err => console.log(err.message));
        }else{
            const show = document.querySelector(".show");
                const alert = document.createElement("div");
                alert.className = `alert alert-danger w-50 mx-auto my-4 text-center`
                alert.textContent = `Please All Fileds Are Requerd!`
                show.appendChild(alert);
                setTimeout(() => {
                    alert.remove();
                    nav("/addCourses");
                }, 2000)
            
        }
    }
    return ( 
        <>
            <section className="container text-light my-5 addtion">
            <h1 className='gradiant text-center my-4 mb-5'>Add Course</h1>
            <div className="icon text-center">
                <i className="fa-solid fa-arrow-down fa-2x mb-5"></i>
            </div>
                <div className="mainTitle text-center">
                    <h1 className="w-75 mx-auto">If you would like to add courses
                    that you think are good and there is consensus on them:</h1>
                </div>
                <div className="show">
                </div>
                <div className="show-courses my-5 text-center">
                <form onSubmit={onSubmit}>
                    <select
                    name="selectiType" className="form-select w-50 mb-3 mx-auto" 
                    aria-label="Default select example" id="selectiType"
                    onChange={(e) => setCourse
                    ({...course , selectiType : e.target.value})}>
                        <option selected>Select Type Course</option>
                        <option value="Type Script">Type Script</option>
                        <option value="Java Script">Java Script</option>
                        <option value="Css">Css</option>
                        <option value="Html">Html</option>
                        <option value="Tailwind">Tailwind</option>
                        <option value="Reactjs">Reactjs</option>
                        <option value="Angularjs">Angularjs</option>
                        <option value="Vuejs">Vuejs</option>
                        <option value="Php">Php</option>
                        <option value="Larvel">Larvel</option>
                        <option value="Other...">Other...</option>
                    </select>
                    <div className="my-4">
                        <input
                        name="TCourse" placeholder="Title Course"
                         type="text" className="form-control w-50 mx-auto"
                        id="TCourse" aria-describedby="TCourse"
                        onChange={(e) => setCourse({
                            ...course, TCourse : e.target.value
                        })}/>
                    </div>
                    <div className="my-4">
                        <input
                        name="MCourse" placeholder="Mentor Course" type="text" className="form-control w-50 mx-auto"
                        id="MCourse"
                        onChange={(e) => setCourse({
                            ...course , MCourse : e.target.value
                        })}/>
                    </div>
                    <div className="my-4">
                        <input
                        name="ViewPlat" placeholder="Viewing platform" type="text" className="form-control w-50 mx-auto"
                        id="ViewPlat"
                        onChange={(e) => setCourse({
                            ...course , ViewPlat : e.target.value
                        })}/>
                    </div>
                    <select
                    name="selectPay" className="form-select w-50 mb-3 mx-auto" 
                    aria-label="Default select example" id="selectPay"
                    onChange={(e) => setCourse({
                        ...course , selectPay : e.target.value
                    })}>
                        <option selected>Is This Course Paid Or Free?</option>
                        <option value="Paid">Paid</option>
                        <option value="Free">Free</option>
                    </select>
                    <button type="submit" className="btn btn-lg text-light mt-2">Submit</button>
                </form>
                </div>
            </section>
        </>
     );
}

export default AddCoursePage;