import JSImage from './assets/jsImage.png'
import HTMLIMG from './assets/htmlImage.jpg'
import ReactIMG from './assets/react.png'
import Course from './Course'

function CourseList(){


    const courses = [
        {
            name:"HTML",
            price: "Rs.100",
            rating: 5,
            img : HTMLIMG
        },
                {
            name:"React",
            price: "Rs.100",
            rating: 5,
            img : ReactIMG
        },
                {
            name:"JavaScript",
            price: "Rs.100",
            rating: 5,
            img : JSImage
        }
    ]

   const courseMap =  courses.map((course) => 
        <Course name={course.name} img={course.img} price={course.price} rating={course.rating}/>
     )

    return (
        <>
        {courseMap}
        </>
    )
}

export default CourseList;