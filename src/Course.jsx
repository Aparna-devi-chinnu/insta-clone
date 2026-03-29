import Loading from './assets/loading.png'
import PropTypes  from 'prop-types'

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

Course.PropTypes = {
    name:PropTypes.string,
    rating: PropTypes.number,
    show: PropTypes.bool
}

export default Course;