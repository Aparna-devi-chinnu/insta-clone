import Loading from './assets/loading.png'
function Course({img = Loading , name , price}){
    return (
        <div className="card">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );

}
export default Course;