import Loading from './assets/loading.png'

function Course({img = Loading , name , price, rating=0}){

    function buyCourse(percent){
        console.log(name ,"purchased with ",percent," % discount")
    }

        return (
        <div className="card">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
            <span>rating : {rating}</span>
            <button onClick={() => buyCourse(20)}>Buy now</button>
        </div>
    );
}

export default Course;