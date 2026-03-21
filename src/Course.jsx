import Loading from './assets/loading.png'
function Course({img = Loading , name , price, rating=0, show=true}){
    if(show==true){
        return (
        <div className="card">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
            <span>rating : {rating}</span>
        </div>
    );
    }
}
export default Course;