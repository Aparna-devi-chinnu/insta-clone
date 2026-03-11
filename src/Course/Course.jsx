import styles from "./Course.module.css" // index.css la irruka ellam auto apply aayidum , illana namma import pananum
const course1 = "React course"
function Course(){
    return (
        <div className={styles.card}>
            <img src="" alt="" />
            <h3>{course1}</h3>
            <p>This is a html course</p>
        </div>
    );

}

export default Course;