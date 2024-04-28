import Navbar from "./components/Navbar";
import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/Footer.jsx";
import CourseHtml from "./pages/Courses/Course Html/CourseHtml.jsx";
import CourseCss from "./pages/Courses/Course Css/CourseCss.jsx";
import CourseJs from "./pages/Courses/Course js/CourseJs.jsx";
import CourseTwind from "./pages/Courses/Course Twind/CourseTwind.jsx";
import CourseReact from "./pages/Courses/Course React/CourseReact.jsx";
import CourseTs from "./pages/Courses/Course Ts/CourseTs.jsx";
import CourseVue from "./pages/Courses/Course Vue/Vue.jsx";
import CourseAngluar from "./pages/Courses/Course Angluar/CourseAngluar.jsx";
import AboutWebsite from "./pages/About to website/About.jsx";
import ContactPage from "./pages/Contact/Contact.jsx";
import AddCoursePage from "./pages/Add Courses/addCourse.jsx";
import ShowCourses from "./pages/Add Courses/ShowCourses.jsx";
import CourseNext from "./pages/Courses/Course Next/CourseNext.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courseHtml" element={<CourseHtml />} />
        <Route path="/courseCss" element={<CourseCss />} />
        <Route path="/courseJs" element={<CourseJs />} />
        <Route path="/courseTiwland" element={<CourseTwind/>}/>
        <Route path="/courseReact" element={<CourseReact />} />
        <Route path="/courseTs" element={<CourseTs />} />
        <Route path="/courseVue" element={<CourseVue />} />
        <Route path="/courseAngluar" element={<CourseAngluar />} />
        <Route path="/courseNext" element={<CourseNext/>} />
        <Route path="/about" element={<AboutWebsite />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/addCourses" element={<AddCoursePage />} />
        <Route path="/showCourses" element={<ShowCourses />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
