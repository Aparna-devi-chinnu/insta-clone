import react from './assets/react.png'
const course1 = "React course"
function Course(){
    return (
        <div className="card">
            <img src={react} alt="" />
            <h3>{course1}</h3>
            <p>This is a html course</p>
        </div>
    );

}

export default Course;