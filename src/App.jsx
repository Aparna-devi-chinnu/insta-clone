import './App.css'
import Course from './Course'
import JSImage from './assets/jsImage.png'
import HTMLIMG from './assets/htmlImage.jpg'
import ReactIMG from './assets/react.png'


function App() {

  return (
    <>
      <Course name="React" img={ReactIMG} price="Rs.205"/>
      <Course name="HTML" img={HTMLIMG} price="Rs.105"/>
      <Course name="Java script" img={JSImage} price="Rs.100" show={false}/>
    </>

  )
}

export default App
